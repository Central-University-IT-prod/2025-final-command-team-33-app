from .api import app


@app.route("/ping", methods=["GET"])
def ping():
    return "PROOOOOOD"
