import flask

app = flask.Flask(__name__)

from .test_route import bp as test_bp
app.register_blueprint(test_bp, url_prefix='/test')

# from .question_route import bp as question_bp
# app.register_blueprint(question_bp, url_prefix='/question')
#
# from .tags import bp as tags_bp
# app.register_blueprint(tags_bp, url_prefix='/tags')