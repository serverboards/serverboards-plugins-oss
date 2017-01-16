# Introduction

Serverboards Expiration Wizard is a plugin that help to be aware of future
expirations.

Classical expirations are SSL certificates, Domain Names or contracts.

Other expiration types can be created via plugins; each plugin can mark some
traits it needs to be able to get the expirations, and the wizard will call the
plugins with the service information, and the checker wil return a list
of expirations.

For example, the SSL checker indicates that it can check services with the `url`
traits, and the wizard will call `ssl_expiration` for each service that has this
trait. If there is some future expiration `ssl_expiration` will return a list of
expirations, each with a `date`, a `name` and optionally `description` and `id`.

This will be shown to the user, and used by the rules to perform the required
actions, as reissuing certificates or creating a issue for manual updating.

The `description` will be shown if more information is required of the
expiration, and the `id` will be used to discard repeated expirations. For
example checking `www.serverboards.io` and `mail.serverboards.io` will both
produce a DNS expiration date, but both reference the same domain expidation.
Using the `id` the expiration Wizard can safetly remove duplicates.

# Create you own checkers

To create your own checkers I recommend to check the SSL checker that is
implemented in this very same plugin, but could be in any other one.

It creates a component as:

```
- id: sslchecker
  name: SSL Expiration Checker
  type: serverboards.expiration
  command: serverboards.expirationwizard/command
  call: ssl_expiration
  traits: url
```

In the command it has a method ssl_expiration:
