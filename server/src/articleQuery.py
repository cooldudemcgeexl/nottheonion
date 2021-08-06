from ariadne import QueryType, make_executable_schema, ObjectType
import os
import json
from random import randint

ARTICLES_FILE = '../articles.json'

articles_json = {}
if not os.path.exists(ARTICLES_FILE):
    articles_json = None
    articles_list = []
else:
    with open(ARTICLES_FILE, 'r', encoding='utf8') as json_file:
        articles_json = json.load(json_file)
        articles_list = articles_json["articles"]


def get_article_schema():
    type_defs = """
        type Query {
            article (inputID: Int): Article 
            numArticles: Int
        }

        type Article {
            articleID: Int
            articleHeadline: String
            articleText: String
            imageUrl: String 
        }

    """

    query = QueryType()
    article = ObjectType("Article")

    @query.field("numArticles")
    def resolve_num_articles(_, info):
        return len(articles_list)

    @query.field("article")
    def resolve_article(_, info, inputID):
        return articles_list[randint(0, len(articles_list)-1)]

    return make_executable_schema(type_defs, query)
