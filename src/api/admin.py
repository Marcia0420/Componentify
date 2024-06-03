  
import os
from flask_admin import Admin
from .models import db, User,Favorite,Component,Plan,Payment, Quote
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='Componetify', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Favorite, db.session))
    admin.add_view(ModelView(Component, db.session))
    admin.add_view(ModelView(Plan, db.session))
    admin.add_view(ModelView(Payment, db.session))
    admin.add_view(ModelView(Quote, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))