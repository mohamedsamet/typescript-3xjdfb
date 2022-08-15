import { PermissionConfig } from './permission-config';

export const PERMISSION_CONF: PermissionConfig = {
  modules: [
    {
      name: 'm1',
      permissions: [
        {
          code: 'p1',
          children: null,
        },
        {
          code: 'p2',
          children: [
            {
              code: 'p3',
              children: [
                {
                  code: 'p4',
                  children: null,
                },
              ],
            },
            {
              code: 'p5',
              children: null,
            },
            {
              code: 'p6',
              children: [
                {
                  code: 'p7',
                  children: null,
                },
                {
                  code: 'p8',
                  children: [
                    {
                      code: 'p9',
                      children: null,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          code: 'p10',
          children: [
            {
              code: 'p11',
              children: null,
            },
            {
              code: 'p12',
              children: [
                {
                  code: 'p13',
                  children: null,
                },
                {
                  code: 'p14',
                  children: [
                    {
                      code: 'p15',
                      children: null,
                    },
                    {
                      code: 'p16',
                      children: null,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'm2',
      permissions: [
        {
          code: 'p17',
          children: [
            {
              code: 'p18',
              children: null,
            },
            {
              code: 'p19',
              children: [
                {
                  code: 'p20',
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
