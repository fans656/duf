import uuid
import getpass
import subprocess
from pathlib import Path

import click
from fans.logger import get_logger

from .api import api


logger = get_logger(__name__)


@click.group()
def auth():
    """Authorization"""
    pass


@auth.command()
def login():
    """Login for current shell session (setting TOKEN environment variable)"""
    username = input('Username: ')
    password = getpass.getpass()
    data = api.post('https://auth.fans656.me/api/login', {
        'username': username,
        'password': password,
    })
    if data:
        print(data['token'])
    else:
        exit(1)
