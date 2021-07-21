from flask import Flask, render_template

renderer: Flask = Flask(__name__, static_folder="static", static_url_path="")


@renderer.route('/')
def render():
    return render_template('summer.html')


@renderer.route('/landing page')
def landing_page():
    return render_template("landing.html")


if __name__ == '__main__':
    Flask.run(renderer, port=5000, debug=True)
