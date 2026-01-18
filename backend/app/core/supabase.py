"""Supabase client utilities."""

from functools import lru_cache

from supabase import Client, create_client

from .settings import get_settings, Settings


@lru_cache
def _build_client(settings: Settings | None = None) -> Client:
    settings = settings or get_settings()
    return create_client(settings.supabase_url, settings.supabase_anon_key)


def get_supabase_client() -> Client:
    """Return a cached Supabase client instance."""

    return _build_client()
