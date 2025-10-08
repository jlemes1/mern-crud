import { z } from 'zod';

export const createTaskSchema = z.object({
  title: z.string({
    required_error: 'Title is required',
  }),
  description: z.string({
    required_error: 'Description is required',
  }),
  date: z.string().datetime().optional(),
});

// export const updateSchema = z.object({
//   title: z.string().min(1).optional(),
//   description: z.string().min(1).optional(),
//   date: z.string().datetime().optional()
// });
