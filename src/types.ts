
/* MAIN */

type Target = {
  getAttribute ( attr: string ): string | null,
  setAttribute ( attr: string, value: string ): void
};

/* EXPORT */

export type {Target};
