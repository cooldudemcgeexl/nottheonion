#!/usr/bin/env python
import os
import json
import pytest
ARTICLES_FILE = '../articles.json'
articles_json = {}
if not os.path.exists(ARTICLES_FILE):
    articles_json = None
    articles_list = []
else:
    with open(ARTICLES_FILE, 'r', encoding='utf8') as json_file:
        articles_json = json.load(json_file)
        articles_list = articles_json["articles"]


class TestAPI:
    def test_num_articles(self):
        assert len(articles_list) > 0

    def test_response_structure(self):
        for article in articles_list:
            assert type(article) is dict
