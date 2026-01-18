# Nyasa Sport Backend

FastAPI backend prepared for the Nyasa Sport platform with a Supabase integration point and modular feature folders.

## Project Structure

```
backend/
  app/
    core/
      deps.py          # Shared FastAPI dependencies
      logging.py       # Logger bootstrap
      settings.py      # Pydantic settings (env-driven)
      supabase.py      # Supabase client factory
    users/
      router.py        # Example router (Supabase dependency)
    teams/
    matches/
    cms/
    tickets/
    streaming/
    main.py            # FastAPI entrypoint
  requirements.txt
  .env (not committed)
```

## Prerequisites

- Python 3.11+
- pip / virtualenv (or uv/poetry, if preferred)
- Supabase project URL + anon key

## Setup

```bash
cd backend
python -m venv .venv
. .venv/Scripts/activate  # Windows PowerShell: .venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

Create `.env` in `backend/`:

```
NYASA_SUPABASE_URL="https://YOUR_PROJECT.supabase.co"
NYASA_SUPABASE_ANON_KEY="your-anon-key"
NYASA_ENVIRONMENT="local"
NYASA_DEBUG=true
NYASA_APP_NAME="Nyasa Sport Backend"
```

## Running

```bash
cd backend
uvicorn app.main:app --reload
```

Visit [`http://localhost:8000/health`](http://localhost:8000/health) to confirm the service responds and reads environment metadata.

## Next Steps

Feature work will go into the relevant module folders (`users`, `teams`, etc.) with routers wired into `app/main.py` as they mature. This keeps development incremental and testable.
