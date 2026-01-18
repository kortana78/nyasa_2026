"""Logging utilities for the Nyasa backend."""

import logging

LOG_FORMAT = "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
logging.basicConfig(level=logging.INFO, format=LOG_FORMAT)


def get_logger(name: str) -> logging.Logger:
    """Return a logger with unified formatting."""

    return logging.getLogger(name)
