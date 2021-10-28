from flask import Flask, redirect, url_for, render_template, request
import os

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/answer', methods = ['POST'])
def answer():
    if request.method == 'POST':
        data = request.form
        return render_template("answer.html", data=data)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
