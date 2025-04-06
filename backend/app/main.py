from fastapi import FastAPI
from app.routes import auth, professional, appointments
from app.database import Base, engine

# cria as tabelas
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Agendario API")

# rotas
app.include_router(auth.router)
app.include_router(professional.router)
app.include_router(appointments.router)
