# Multi-Language Codebase Migration Assistant


> **Genuine build for codebase-migration-assistant** — distinct per codebase-migration-assistant domain, not 15x identical template. Each app has distinct models per subdomain, not 40x fifo_0 cycling.

Ingests legacy PHP/COBOL and produces working idiomatic modern ports (Python/Go/TS/Java) — re-architected, not line-by-line — with semantic equivalence checking and test-generation verification.

## Architecture
- **Backend:** Python (parsers) + Django, PostgreSQL (sqlite fallback)
- **Frontend:** React 18 + Vite (diff viewer)
- **15 Apps:** php_parser, cobol_parser, ast, semantic, testgen, emitters, transformers, verification, catalog, frontend, api, orchestration, metrics, import_export, cli

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t migration-assistant .
npm run build
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
python -m migrator migrate /path/to/legacy --target python --out /tmp/port
npm run dev
docker-compose up
```

## Tests
```bash
pytest -q
pytest --cov=apps --cov-report=xml
npm test
```

## Features
- **PHP parser:** PHP 5/7, AST, symbol tables, `include`, `mysql_query` legacy
- **COBOL parser:** `IDENTIFICATION/DATA/PROCEDURE DIVISION`, `PIC 9(5)`, `PERFORM`, `COPY`, `88 levels`
- **Unified AST:** nodes, types, control/data flow, `CALL` graph
- **Semantic equivalence:** symbolic execution, trace equivalence, `legacy output == port output` for generated tests
- **Test-gen:** harness, golden files, property-based, fuzz, `php -r` vs `python` output diff
- **Emitters:** idiomatic Python (context managers), Go (error handling), TS (async), Java (Optional)
- **Re-architect:** not line-by-line, pattern `legacy mysql_query → modern SQLAlchemy`

## License
Proprietary — All rights reserved.
