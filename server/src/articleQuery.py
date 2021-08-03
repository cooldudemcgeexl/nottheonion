from ariadne import QueryType, make_executable_schema
import random


def get_article_schema():
    type_defs = """
        type Query {
            articleID: Int!
            articleHeadline: String!
            articleText: String!
            imageUrl: String!
        }
    """

    query = QueryType()

    @query.field("articleID")
    def resolve_article_id(_, info):
        return random.randint(0, 800)

    @query.field("articleHeadline")
    def resolve_article_text(_, info):
        return "Lorem Ipsum"

    @query.field("articleText")
    def resolve_article_text(_, info):
        return "Lorem Ipsum"

    @query.field("imageUrl")
    def resolve_image_url(_, info):
        return "www.google.com"

    return make_executable_schema(type_defs, query)
