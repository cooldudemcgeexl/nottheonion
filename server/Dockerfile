FROM python:3.9.6


COPY ./requirements.txt /app/requirements.txt


WORKDIR /app

RUN pip install -r requirements.txt --no-cache-dir
COPY . /app


CMD ["/app/entrypoint.sh"]