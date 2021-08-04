import json
from google_images_search import GoogleImagesSearch
from dotenv import load_dotenv
import os
import openai
from openai.api_resources import engine


load_dotenv()

openai.organization = os.getenv("OPENAI_ORG_ID")
openai.api_key = os.getenv("OPENAI_API_KEY")
gis = GoogleImagesSearch(os.getenv("GOOGLE_API_KEY"), os.getenv("GOOGLE_CX"))

ARTICLES_FILE = 'articles.json'


def load_json_dict() -> dict:
    if not os.path.exists(ARTICLES_FILE):
        return None
    with open(ARTICLES_FILE, 'r', encoding='utf8') as json_file:
        json_from_file = json.load(json_file)
    return json_from_file


def search_google_images(headline: str) -> str:
    print(f'Current headline: {headline}\nInput a search term:')
    search_term = input()
    _search_params = {
        'q': search_term,
        'num': 5,
        'safe': 'high',
        'fileType': 'jpg|gif|png',
        'imgType': 'photo',
        'rights': 'cc_publicdomain|cc_attribute|cc_sharealike|cc_noncommercial|cc_nonderived'
    }

    gis.search(search_params=_search_params)
    for image in gis.results():
        print(f'Image result: {image.url}\nAccept image? [y/n]')
        user_input = input()
        if user_input == 'y':
            return image.url
    return None


def generate_headline():
    response = openai.Completion.create(
        engine="davinci",
        prompt="Generate a headline for The Onion:\n",
        temperature=0.9,
        max_tokens=16,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0,
        stop=["\\n", "\\n\\n"]
    )
    for choice in response.choices:
        print(f'Response: {choice.text}\nAccept [y/n]? ')
        user_input = input()
        if user_input == 'y':
            return choice.text
        else:
            return None


def generate_article(headline: str):
    response = openai.Completion.create(
        engine="davinci",
        prompt=f"Generate an article for The Onion with the headline \"{headline}\"\n\n",
        temperature=0.7,
        max_tokens=256,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0,
        stop=["\\n", "\\n\\n"]
    )
    for choice in response.choices:
        print(f'Response: {choice.text}\nAccept [y/n]? ')
        user_input = input()
        if user_input == 'y':
            return choice.text
        else:
            return None


if __name__ == "__main__":
    user_exit = False
    json_dict = load_json_dict()
    if json_dict is None:
        print("No articles.json file found, creating new.")
        json_dict = {'articles': []}
    while not user_exit:
        headline = None
        article_text = None
        image_url = None
        while headline is None:
            headline = generate_headline()
        while article_text is None:
            article_text = generate_article(headline=headline)
        while image_url is None:
            image_url = search_google_images(headline=headline)
            if image_url is None:
                print(
                    "No image selected. Retry with different search term? [y/n] ")
                image_retry = input()
                if image_retry == 'n':
                    image_url = ''
        article_id = len(json_dict["articles"])
        article = {
            'articleID': article_id,
            'articleHeadline': headline,
            'articleText': article_text,
            'imageUrl': image_url
        }
        print(f"Add the following article?\nArticle:\n{article}\n[y/n]")
        add_article = input()
        if add_article == 'y':
            json_dict["articles"].append(article)
            with open(ARTICLES_FILE, 'w', encoding='utf8') as json_file:
                json.dump(json_dict, json_file)
            print("Article added!")
        else:
            print("Article not added.")
        print("Continue? [y/n]")
        user_continue = input()
        if user_continue == 'n':
            user_exit = True
