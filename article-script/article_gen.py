from google_images_search import GoogleImagesSearch
from dotenv import load_dotenv
import os
import openai
from openai.api_resources import engine


load_dotenv()

openai.organization = os.getenv("OPENAI_ORG_ID")
openai.api_key = os.getenv("OPENAI_API_KEY")
gis = GoogleImagesSearch(os.getenv("GOOGLE_API_KEY"), os.getenv("GOOGLE_CX"))


def search_google_images(search_term: str) -> str:
    _search_params = {
        'q': 'dog',
        'num': 2,
        'safe': 'high',
        'fileType': 'jpg|gif|png',
        'imgType': 'photo',
        'rights': 'cc_publicdomain|cc_attribute|cc_sharealike|cc_noncommercial|cc_nonderived'
    }

    gis.search(search_params=_search_params)
    for image in gis.results():
        print(image.url)


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
        print(choice.text)


if __name__ == "__main__":
    generate_headline()
