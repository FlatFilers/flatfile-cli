# Flatfile CLI

A modern command-line interface for Flatfile, built with Deno, TypeScript, and Ink.

## Features

- 🚀 Built with Deno 2.0 for optimal performance and security
- 💅 Beautiful terminal UI powered by Ink and React
- 📦 Type-safe implementation using TypeScript
- 🎨 Modern CLI framework using Pastel

## Prerequisites

- [Deno](https://deno.land/) version 2.x or higher

## Installation

```bash
# Clone the repository
git clone https://github.com/flatfilers/flatfile-cli.git

# Navigate to the project directory
cd flatfile-cli
```

## Development

```bash
# Run the development version
deno task dev

# Run tests
deno task test
```

## Project Structure

```
src/
  ├── commands/     # CLI command implementations
  ├── components/   # Ink UI components
  ├── utils/        # Helper functions
  ├── types/        # TypeScript type definitions
  └── flatfile.tsx  # Main entry point
```

## Commands

The CLI supports various commands to interact with Flatfile. Use `--help` with any command to see its options.

```bash
flatfile --help
```

## Configuration

The project uses `deno.json` for configuration:

- TypeScript and JSX configuration
- Task definitions
- Import maps for dependencies

## Dependencies

- React 18
- Ink 5
- Commander 11
- Pastel (CLI Framework)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the Flatfile team. 
