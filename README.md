# Rematch V0 Components

This repository contains V0-generated components for the Rematch Padel platform. These components are designed in V0 and then integrated into the main application.

## 🎯 Purpose

- **Design System**: Central place for all V0 components
- **Storybook Integration**: Visual component documentation and testing
- **Clean Separation**: Keeps V0 artifacts separate from main app
- **Component Library**: Reusable UI components for Rematch

## 🚀 Quick Start

\`\`\`bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Build Storybook for deployment
npm run build-storybook
\`\`\`

## 📁 Structure

\`\`\`
v0-components/
├── components/          # V0 generated components
├── stories/            # Storybook stories
├── src/               # Next.js app structure (for V0)
├── .storybook/        # Storybook configuration
└── public/            # Static assets
\`\`\`

## 🎨 Components

### Tournament Player Card
- **File**: `components/TournamentPlayerCard.tsx`
- **Story**: `stories/TournamentPlayerCard.stories.tsx`
- **Status**: ✅ Integrated into main app

### Component Template
- **File**: `components/ComponentName.tsx`
- **Story**: `stories/ComponentName.stories.tsx`
- **Status**: 🔄 In development

## 🔄 Workflow

1. **Design**: Create components in V0
2. **Push**: V0 pushes to this repository
3. **Review**: Check components in Storybook
4. **Integrate**: Manually integrate into main app
5. **Document**: Update this README

## 📚 Storybook

Components are documented and tested in Storybook:
- **Local**: http://localhost:6006
- **Deployed**: [Storybook.io URL will be here]

## 🛠 Integration

When integrating components into the main app:

1. Copy component from `components/`
2. Adapt imports and data props
3. Place in `src/components/` of main app
4. Update with real data integration
5. Test thoroughly

## 📝 Notes

- This repo may have artifacts from V0 (build files, configs)
- Only use the `components/` folder for integration
- Storybook shows components in isolation
- Main app handles data integration
