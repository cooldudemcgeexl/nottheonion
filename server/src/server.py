#!/usr/bin/env python
from flask import Flask, request, jsonify
from ariadne import graphql_sync
from ariadne.constants import PLAYGROUND_HTML
from articleQuery import get_article_schema


app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'HELLO WORLD'


@app.route("/graphql", methods=["POST"])
def graphql_server():
    # GraphQL queries are always sent as POST
    data = request.get_json()

    # Note: Passing the request to the context is optional.
    # In Flask, the current request is always accessible as flask.request
    success, result = graphql_sync(
        get_article_schema(),
        data,
        context_value=request,
        debug=app.debug
    )

    status_code = 200 if success else 400
    return jsonify(result), status_code


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
