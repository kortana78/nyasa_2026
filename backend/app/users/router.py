"""User routes placeholder."""

from fastapi import APIRouter, Depends

from ..core.deps import get_supabase

router = APIRouter(prefix="/users", tags=["users"])


@router.get("/")
def list_users(supabase=Depends(get_supabase)):
    """Example route showing Supabase dependency."""

    # Placeholder for actual querying.
    return {"message": "Supabase client ready", "client": str(type(supabase))}
