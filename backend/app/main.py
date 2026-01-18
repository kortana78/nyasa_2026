"""FastAPI entrypoint for Nyasa Sport backend."""

from fastapi import FastAPI

from .core.settings import get_settings

app = FastAPI(title="Nyasa Sport API")


@app.get("/health", tags=["health"])
def read_health() -> dict[str, str | bool]:
    """Basic health endpoint with environment metadata."""

    settings = get_settings()
    return {
        "status": "ok",
        "app": settings.app_name,
        "environment": settings.environment,
        "debug": settings.debug,
    }
