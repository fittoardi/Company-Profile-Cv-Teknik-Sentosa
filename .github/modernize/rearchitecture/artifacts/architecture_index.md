# Architecture Index

This index is a navigation aid for the analyzed frontend. This index is not the full contract. Do not implement from this file alone; follow the artifact paths below.

## Global artifacts

- `unit_graph.yaml`: page boundaries, routes, exported signatures, and shared references.
- `project-structure.md`: project classification, layers, and source layout.
- `tech-stack.md`: existing frameworks, dependencies, runtimes, and commands.
- `data-model.md`: persisted `leads` entity and trigger behavior.
- `wire_contracts.yaml`: Supabase, Edge Function, and WhatsApp contracts.
- `shared_modules.yaml`: shared content, UI, shell, and persistence boundaries.
- `cross_unit_state.yaml`: implicit state flows; currently empty.

## Implementation Guide

For every unit, read its `behavior.yaml`, `bindings.yaml`, and `unit_decomposition.yaml`. Filter `wire_contracts.yaml` by `unit`, `shared_modules.yaml` by `used_by_units`, and `cross_unit_state.yaml` by writer/reader unit. Before DONE report artifact paths read, preserved behavior/bindings, unresolved contracts, and verification evidence.

### Unit: home

- External trigger: hash route `#/`.
- Read: `units/home/behavior.yaml`, `units/home/bindings.yaml`, `units/home/unit_decomposition.yaml`.
- Relevant globals: static-content, page-shell, navigation-ui, and contracts only if CTA behavior changes.

### Unit: about

- External trigger: hash route `#/tentang`.
- Read: `units/about/behavior.yaml`, `units/about/bindings.yaml`, `units/about/unit_decomposition.yaml`.
- Relevant globals: static-content, page-shell, navigation-ui.

### Unit: services

- External trigger: hash route `#/layanan`.
- Read: `units/services/behavior.yaml`, `units/services/bindings.yaml`, `units/services/unit_decomposition.yaml`.
- Relevant globals: static-content, page-shell, navigation-ui.

### Unit: projects

- External trigger: hash route `#/proyek`.
- Read: `units/projects/behavior.yaml`, `units/projects/bindings.yaml`, `units/projects/unit_decomposition.yaml`.
- Relevant globals: static-content, page-shell, navigation-ui.

### Unit: contact

- External trigger: hash route `#/kontak`.
- Read: `units/contact/behavior.yaml`, `units/contact/bindings.yaml`, `units/contact/unit_decomposition.yaml`.
- Relevant globals: static-content, page-shell, navigation-ui, lead-persistence, and all `wire_contracts.yaml` rows for `contact`.

