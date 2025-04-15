import flask

bp = flask.Blueprint('test', __name__)

@bp.route('/', methods=['GET'])
def tes_index():
    return "abobus"
