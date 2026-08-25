# Tambola - The Indian Housie

Backend application for a multiplayer Tambola/Housie game.

## Technology Stack

- Java 17
- Spring Boot 3.2.0
- Maven
- PostgreSQL
- Spring Data JPA
- Spring Web
- Validation

## Prerequisites

- Java 17 or higher
- Maven 3.6+
- PostgreSQL 12+

## Getting Started

### Database Setup

1. Ensure PostgreSQL is installed and running locally.

2. Create a PostgreSQL database named `tambola_db`:

```sql
CREATE DATABASE tambola_db;
```

3. Configure the database password as an environment variable:

**Windows (Command Prompt):**
```cmd
set DB_PASSWORD=your_postgres_password
```

**Windows (PowerShell):**
```powershell
$env:DB_PASSWORD="your_postgres_password"
```

**Linux/Mac:**
```bash
export DB_PASSWORD=your_postgres_password
```

Alternatively, create a `.env` file in the backend directory using `.env.example` as a template. The application imports this file when present; environment variables supplied by Render or your shell are also supported.

### Build and Run

```bash
# Build the project
mvn clean install

# Run the application
mvn spring-boot:run
```

The application will start on `http://localhost:8080`

### Configuration

The backend reads its deployment configuration from environment variables:
- `DATABASE_URL`: JDBC PostgreSQL URL
- `DB_USERNAME`: PostgreSQL username
- `DB_PASSWORD`: PostgreSQL password
- `FRONTEND_URL`: allowed frontend origin(s), comma-separated when needed locally
- `PORT`: server port; Render supplies this automatically

Local defaults are provided for the database URL, username, frontend origins, and server port. `DB_PASSWORD` must be supplied through the environment.

## Project Structure

```
tambola-backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── tambola/
│   │   │           └── housie/
│   │   │               └── TambolaApplication.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
│       └── java/
│           └── com/
│               └── tambola/
│                   └── housie/
│                       └── TambolaApplicationTests.java
└── pom.xml
```
