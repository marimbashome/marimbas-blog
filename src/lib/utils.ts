import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to merge Tailwind CSS classes with clsx
 * Handles className conflicts by giving precedence to later values
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Property helper for conditional styling
 */
export function property(condition: boolean, trueValue: string, falseValue: string = ''): string {
  return condition ? trueValue : falseValue
}

/**
 * Cluster helper for grouping related classes
 */
export function cluster(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ')
}