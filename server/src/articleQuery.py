from ariadne import QueryType, make_executable_schema, ObjectType
import os
import json

ARTICLES_FILE = '../articles.json'

articles_json = {}
if not os.path.exists(ARTICLES_FILE):
    articles_json = None
with open(ARTICLES_FILE, 'r', encoding='utf8') as json_file:
    articles_json = json.load(json_file)


def get_article_schema():
    type_defs = """
        type Query {
            article(inputID: Int!): Article 
            numArticles: Int
        }

        type Article {
            articleID: Int!
            articleHeadline: String!
            articleText: String!
            imageUrl: String! 
        }

    """

    query = QueryType()
    article = ObjectType("Article")

    @query.field("numArticles")
    def resolve_num_articles(_, info):
        return len(articles_json["articles"])

    @query.field("article")
    def resolve_article(_, info, inputID):
        return articles_json["articles"][inputID]

    return make_executable_schema(type_defs, query)
