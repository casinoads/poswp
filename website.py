import calendar
import sqlite3
import requests
import base64,re,os
from contextlib import closing
from datetime import date, datetime, timedelta
from flask import Flask, jsonify,redirect,url_for, render_template, request
from wtforms import StringField
from wtforms.validators import DataRequired
from wordpress_xmlrpc import WordPressPage
from wordpress_xmlrpc.methods.posts import GetPosts, NewPost ,EditPost
from wordpress_xmlrpc.methods.media import UploadFile
from wordpress_xmlrpc.methods.users import GetUserInfo
from wordpress_xmlrpc import Client, WordPressPost , WordPressComment
from wordpress_xmlrpc.compat import xmlrpc_client
from wordpress_xmlrpc.methods import media, posts  ,comments
import markdown
import urllib.request
import mimetypes
import urllib.request

global console
console = []
database = 'database.db'


def create_dropdown_data():
    dropdown = ['aidnews.org','f5tadalafil.com','money-remit.com','moneyfreeturn.com','free-kickgame.com','168campaign.com','clubbet99.com','onlinemoney411.net','worldsportsupply.com','onlinemoviesportsandtv.com','fayettesports.com','online-motorsport.com','games-hacked.com','goldmine-games.com','tahdahgames.com','gohotgame.com','edarathegame.com','wegamealot.com','allheartsports.com','riverbedgame.com','moonfarmgames.com','junketgame.com','luderiagames.com','getgamerduel.com','unblockedgamesinfo.com','victory789.com','kitews.com','progame88.com','winningbet888.com','sbowin123.com','clubgame77.com','united1688.com','moneyworldresearch.com','goodbyealiensgame.com','bertsmotorsports.com','throughthepensports.com','teongame.com','gamespluto.com','ff0000game.com','foodseriousgame.com','moreiogames.com','addictinghelicoptergames.com','madden18gameplay.com','narcosthegame.com','titanium-games.com','ovagamess.com','xtragamesinternational.com','yachtclubgame.com','tethergamer.com','gamesyoum7.com','sboups.com']
    return dropdown


def shutdown_server():
    func = request.environ.get('werkzeug.server.shutdown')
    if func is None:
        raise RuntimeError('Not running with the Werkzeug Server')
    func()


def start_server(host, port):
    app = Flask(__name__,
                static_url_path='',
                static_folder='web/static',
                template_folder='web/templates')


    @app.route('/')
    def home():
        dropdown = create_dropdown_data()
        return render_template('homepage.html', dropdownitems=dropdown)


    @app.route('/success/<name>')
    def success(name):
        return 'POST TO SITE %s' % name

    @app.route('/ssss',methods = ['POST', 'GET'])
    def wppost():
        if request.method == 'POST':
            sitepost_url = request.form['siteurlselect']
            sitepost_user = request.form['siteuserselect']
            sitepost_pass = request.form['sitepassselect']
            sitepost_content = request.form['mdtext']
            sitepost_title = request.form['site_title']
            sitepost_img = request.form['site_img']
            #sitepost_category = request.form.get("sitecategory")
            #sitepost_tag = request.form.get("sitetag")
            #sitepost_url, sitepost_user, sitepost_pass, sitepost_content = create_post_data(query)
            print(sitepost_url,sitepost_user,sitepost_pass,sitepost_title,sitepost_img,sitepost_content)
            mainPost(sitepost_url,sitepost_user,sitepost_pass,sitepost_content,sitepost_title,sitepost_img)
            return '''
                    <h1>POST TO SITE : {}</h1>'''.format(sitepost_url)
        else:
            site_URL = request.args.get('mdtext')
            
            #site_content = request.args.get('content')
            return '''
                    
                    <h1>POST TO/: {}</h1>'''.format(site_URL)
        
        
        
    @app.route('/form-example', methods=['GET', 'POST'])
    def form_example():
        # handle the POST request
        if request.method == 'POST':
            site_url = request.form.get('siteurlselect')
            site_user = request.form.get('siteuserselect')
            site_pass = request.form.get('sitepassselect')
            return '''
                    <h1>SITE: {}</h1>
                    <h1>USER/PASS: {}</h1>'''.format(site_url, site_user,site_pass)

        # otherwise handle the GET request
        return '''
            <form method="POST">
                <div><label>url: <input type="text" name="siteurlselect"></label></div>
                <div><label>user: <input type="text" name="siteuserselect"></label></div>
                <div><label>pass: <input type="text" name="sitepassselect"></label></div>
                <input type="submit" value="Submit">
            </form>'''



    def mainPost(post_url, post_user, post_pass, post_content,post_title,post_img):
        
        wp_url = "https://"+post_url+"/xmlrpc.php"
        wp_username = post_user
        wp_password = post_pass
        wp = Client(wp_url, wp_username, wp_password)

        # datauser
        urlIMG = "https://drive.google.com/uc?export=download&id="+post_img.split("/")[5]
        md_text = './web/static/tmp/export.htm'
        haeder = post_title
        print(urlIMG,haeder)
        print(post_content)
        
        def Images(haeder,urlIMG):
            tilt = re.sub(r'\W+', '', haeder)
            url = urlIMG
            image_name = str(tilt) + '.jpg'
            image_location = './web/static/tmp/' + image_name
            urllib.request.urlretrieve( url , image_location) # download the image
            image = image_location
            imageType = mimetypes.guess_type(str(image))[0]
            img_data = {
                'name': image_name,
                'type': imageType,  
            }
            with open(image, 'rb') as img:
                img_data['bits'] = xmlrpc_client.Binary(img.read())

            img_response = wp.call(media.UploadFile(img_data))   
            attachment_id = img_response['id']
            return attachment_id

        with open(md_text, "rb") as f:
            contents = f.read()
            
        html = markdown.markdown(post_content)
        print("markdown html")
        #post and activate new post
        ImgPPost = Images(haeder,urlIMG)
        post = WordPressPost()
        post.title = haeder
        post.content = html
        post.post_status = 'publish'
        #image_id = resp['id']
        post.thumbnail = ImgPPost
        post.Large = ImgPPost
        #post.excerpt = post_content[0:80]
        post.terms_names = {
        'post_tag': ['ใหม่ล่าสุด', 'Newest Post'],
        'category': ['บทความ', 'ยอดนิยม']
        }
        wp.call(NewPost(post))
        
        #file_path = './static/tmp/'
        #os.remove(file_path)

    @app.route('/shutdown', methods=['POST'])
    def shutdown():
        shutdown_server()
        return 'Server shutting down...'

    app.run(host=host, port=port)

if __name__ == '__main__':
    start_server(host='0.0.0.0', port=5000)
