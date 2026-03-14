---
name: ui-styling
description: "UI implementation with shadcn/ui + Tailwind CSS — component installation, theme config, responsive layouts, dark mode, accessibility patterns, and common UI patterns."
argument-hint: "[component-or-layout] [stack]"
allowed-tools: [Read, Write, Edit, Glob, Grep, Bash]
---

# UI Styling: $ARGUMENTS

Implement designs using shadcn/ui components and Tailwind CSS utilities. Covers setup, theming, responsive layouts, dark mode, and accessibility.

## When to Use

- Building UI with React frameworks (Next.js, Vite, Remix)
- Installing and configuring shadcn/ui components
- Setting up Tailwind CSS theming from design tokens
- Implementing responsive, mobile-first layouts
- Adding dark mode support
- Building accessible UI patterns (forms, dialogs, tables, navigation)

## Core Stack

### shadcn/ui
- Pre-built accessible components via Radix UI primitives
- Copy-paste distribution — components live in your codebase
- TypeScript-first with full type safety
- CLI: `npx shadcn@latest init` / `npx shadcn@latest add [component]`

### Tailwind CSS
- Utility-first, zero runtime overhead
- Mobile-first responsive design
- Automatic dead code elimination
- Consistent design tokens

## Quick Setup

```bash
# Initialize shadcn/ui (configures Tailwind too)
npx shadcn@latest init

# Add components
npx shadcn@latest add button card dialog form input select tabs table
```

## Theme Configuration

### CSS Variables (from design-system skill output)

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... dark variants */
  }
}
```

### Dark Mode Toggle (next-themes)
```tsx
import { ThemeProvider } from "next-themes"

export function Providers({ children }) {
  return <ThemeProvider attribute="class" defaultTheme="system">{children}</ThemeProvider>
}
```

## Component Patterns

### Form with Validation
```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export function LoginForm() {
  const form = useForm({ resolver: zodResolver(schema) })
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl><Input type="email" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <Button type="submit" className="w-full">Sign In</Button>
      </form>
    </Form>
  )
}
```

### Responsive Card Grid
```tsx
<div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <CardContent>Content</CardContent>
    </Card>
  </div>
</div>
```

## Responsive Breakpoints

| Prefix | Min Width | Target |
|--------|-----------|--------|
| (none) | 0px | Mobile (default) |
| `sm:` | 640px | Large phones |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops |
| `xl:` | 1280px | Desktops |
| `2xl:` | 1536px | Large screens |

## Accessibility Checklist

- [ ] All interactive elements have visible focus states (`focus-visible:ring-2`)
- [ ] Form inputs have associated `<label>` elements
- [ ] Icon-only buttons have `aria-label`
- [ ] Color contrast ≥ 4.5:1 for text
- [ ] Touch targets ≥ 44×44px
- [ ] Dialog/modal has focus trap and Escape to close
- [ ] Tab order matches visual order

## Best Practices

1. **Utility-first**: use Tailwind classes directly; extract components only for true repetition
2. **Mobile-first**: start with mobile styles, add responsive variants
3. **Semantic tokens**: never use raw hex — always reference CSS variables
4. **Dark mode**: apply `dark:` variants to all themed elements
5. **Performance**: leverage automatic CSS purging; avoid dynamic class names
6. **Composition**: build complex UIs from simple, composable shadcn primitives

## Resources

- shadcn/ui: https://ui.shadcn.com
- Tailwind CSS: https://tailwindcss.com
- Radix UI: https://radix-ui.com
