# **Not** The Onion
An AI-powered parody news website. Final project for Software Engineering class.

## What is it?
**Not** The Onion is a wensite serving pre-generated articles designed to mimic the style of [The Onion](www.theonion.com). The articles are uncannily similar, hence the idea, "I can't believe it's **not** The Onion!"

All articles are generated using OpenAI's API. See the `article-script` folder for details. Output is curated.

## How to Run
To run Not the Onion, Docker and docker-compose are required:

1. Clone the repository
2. Run `docker-compose up`
3. The application should now be running at localhost with at the port defined for Nginx in `docker-compose.yml`

## Disclaimer
**Not** The Onion is in no way affliated with The Onion (hence the Not). Articles are purely chosen to showcase the somewhat bizarre nature of AI-powered text generation. The content of articles in no way relfect the political or religious beliefs of the authors of this program. That being said, since the OpenAI model has been instructed to write in the style of The Onion, there is a rather large emphasis on 2017-2019 era political humor.

Any reference of real-life figures is purely due to AI output, and in no way is an implication that any of the events of said articles actually happened.

