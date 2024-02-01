# Check Codeswars's Kata Action

An action to check if Kata is completed on a user account.

## Inputs

### `kata-id`

**Required** The ID of Kata to be checked.

## Outputs

### `is-completed`

Whether or not the user complete the Kata.

## Example usage

```yaml
uses: OU-CS3560/check-codewars-kata@v1
with:
  kata-id: '5f70c883e10f9e0001c89673'
```

## Development

Build the action

```console
npm run build
```

## Note

This is a JavaScript port of the internal Python implementation.
