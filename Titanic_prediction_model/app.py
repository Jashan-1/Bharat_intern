from flask import Flask, render_template, request
import numpy as np 
from joblib import load 

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def page():
    pass