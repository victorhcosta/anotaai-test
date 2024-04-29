# Project Architecture

## Overview

This project uses Angular to create an SPA web application. The project structure is divided into modules to promote code reusability and modularization.

### Modules

- **App Module**: The root module that starts the application.
- **List Module**: A feature module that handles the display and manipulation of cards.
- **Shared Module**: Contains reusable components and utilities.

### Services

- **ListService**: Manages business logic for operations related to cards.

### Components

- **AppComponent**: The root component of the application.
- **CardComponent**: A component that represents a single card.
- **HeaderComponent**: A reusable header component.

## Routing

Routing is managed by the `AppRoutingModule`, which uses lazy loading for the `ListModule`.

## State Management

State is managed locally within components and services without the use of external state management to simplify the application.

## Styles

Styles are organized using SCSS with the BEM methodology to keep styles consistent and modularized.
