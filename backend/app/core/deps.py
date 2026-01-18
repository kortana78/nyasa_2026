"""Common dependency utilities."""

from supabase import Client

from .supabase import get_supabase_client


def get_supabase() -> Client:
    """Provide a Supabase client instance for request handlers."""

    return get_supabase_client()
