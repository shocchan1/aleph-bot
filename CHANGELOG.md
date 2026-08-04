# CHANGELOGS

## v0.1.0

### Added

- Initialization project
- Recursive function
- Event handler
- Command handler
- Ping command
- User info command

## v0.2.0

### Changed

- Improved command loader
- Improved event loader
- Better embedded response

### Fixed

- Added optional target to /userinfo command

## v0.3.0

### Added

- Added `/userinfo` command
- Added `/serverinfo` command
- Added `/botinfo` command
- Added rich embed responses
- Added server and bot information
- Added optional target support for `/userinfo`

### Changed

- Improved embed consistency across commands
- Enhanced command response formatting

### Fixed

- Fixed undefined banner by fetching user before access
- Fixed member count formatting

## v0.4.0 — Discord Components Foundation

### Added

#### Buttons

* Added a modular button handler.
* Implemented button component loader.
* Registered button interactions using a centralized `client.buttons` collection.
* Improved interaction routing for button components.

#### Modals

* Added support for Discord modals.
* Implemented a modular modal handler.
* Added modal component loader.
* Registered modal interactions using `client.modals`.
* Created a feedback modal as the first implementation.

#### Select Menus

* Added support for Discord Select Menus.
* Implemented a unified menu handler.
* Registered menu interactions using a centralized `client.menus` collection.
* Added support for:

  * String Select Menu
  * User Select Menu
  * Role Select Menu
  * Channel Select Menu

#### Admin Dashboard

* Introduced `/admin-dashboard` as the first interactive dashboard command.
* Implemented category navigation using a String Select Menu.
* Added interactive member information lookup.
* Added interactive role information lookup.
* Added interactive channel information lookup.

### ♻️ Improved

* Refactored interaction routing to support multiple Discord interaction types.
* Standardized component architecture across commands, buttons, modals, and menus.
* Improved project scalability by introducing reusable component loaders.
* Reduced command duplication by consolidating administrative utilities into a single dashboard flow.

### 🛠 Fixed

* Fixed interaction routing issues while handling Discord components.
* Improved loader consistency across modular handlers.

### 📌 Notes

This release establishes the core Discord Components architecture for AlephBot.

With this version, the project now supports interactive workflows through Buttons, Modals, and Select Menus, providing a scalable foundation for future moderation features, dashboards, ticket systems, verification systems, and other advanced interactions.

Menurutku, **v0.5.0** adalah salah satu milestone terbesar AlephBot sejauh ini. Pada versi ini kamu tidak hanya menambahkan fitur, tetapi juga membangun **fondasi backend** yang akan dipakai semua fitur selanjutnya.

Aku akan membuat changelog dengan gaya yang profesional namun tetap mudah dibaca.

---

# AlephBot v0.5.0 — Database Foundation

## ✨ Added

### Database

* Added MongoDB Atlas integration.
* Added centralized database connection manager.
* Environment variable support for database credentials.

### Models

* Added `Guild` model using Mongoose.
* Implemented automatic timestamps (`createdAt` & `updatedAt`).
* Added default guild configuration values.
* Enforced unique Guild ID to prevent duplicate server records.

### Repository Layer

* Added `GuildRepository`.
* Implemented database abstraction layer.
* Added helper methods:

  * `findByGuildId()`
  * `createGuild()`
  * `updateGuild()`
  * `deleteGuild()`
  * `getOrCreateGuild()`

### Service Layer

* Added `GuildService`.
* Implemented business logic for guild configuration.
* Added language validation before database updates.
* Prevented unnecessary database writes when configuration remains unchanged.

### Commands

* Refactored `/set-language` to use the new Service → Repository architecture.
* Added dynamic language choices from a centralized constants file.
* Improved command error handling using `try...catch`.

---

## 🔄 Changed

* Introduced layered architecture:

```text
Discord Interaction
        ↓
     Command
        ↓
     Service
        ↓
    Repository
        ↓
       Model
        ↓
     MongoDB
```

* Commands no longer access database models directly.
* Business logic moved from commands into the Service layer.
* Database operations centralized inside repositories.
* Improved maintainability and scalability of the project structure.

---

## ⚡ Performance

* Reduced unnecessary database queries by introducing `getOrCreateGuild()`.
* Prevented redundant updates when the selected language is already active.
* Eliminated duplicated database logic across commands.

---

## 🛠 Developer Experience

* Improved separation of concerns throughout the project.
* Established a reusable backend pattern for future features.
* Simplified development of future guild configuration commands.
* Created a scalable foundation for moderation, logging, temporary voice, localization, and dashboard integration.