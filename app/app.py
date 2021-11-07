from flask import Flask, redirect, url_for, render_template, request
import os
from guesslang import Guess

guess = Guess()

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/answer', methods = ['POST'])
def answer():
    if request.method == 'POST':
        listprobabilities = []
        data = request.form
        language = guess.language_name(data.get('codepaste'))
        probabilities = guess.probabilities(data.get('codepaste'))
        if probabilities != None:
            probabilities.sort(key=lambda x:x[1])

            for index, tuple in enumerate(probabilities):
                templist =[]
                templist.append(tuple[0])
                templist.append(tuple[1])
                listprobabilities.append(templist)   
            
            return render_template("answer.html", language=language, listprobabilities=listprobabilities)
        return render_template("answer.html")

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
