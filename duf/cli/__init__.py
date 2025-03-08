import click

from .log import log
from .init import init
from .host import host
from .auth import auth
from .deploy import deploy


@click.group
def cli():
    pass


cli.add_command(init)
cli.add_command(host)
cli.add_command(auth)
cli.add_command(deploy)
cli.add_command(log)
