"""Application configuration using Pydantic settings."""

from functools import lru_cache
from typing import Literal

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Project-level settings loaded from environment variables."""

    app_name: str = "Nyasa Sport Backend"
    environment: Literal["local", "development", "staging", "production"] = "local"
    debug: bool = True

    supabase_url: str
    supabase_anon_key: str

    model_config = SettingsConfigDict(env_file=".env", extra="ignore", env_prefix="NYASA_")


@lru_cache
def get_settings() -> Settings:
    """Return a cached settings instance to avoid re-parsing env vars."""

    return Settings()  # type: ignore[arg-type]
