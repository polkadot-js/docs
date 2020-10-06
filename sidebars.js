module.exports = {
  reference: {
    Introduction: ['intro'],
    API: [
      'api/intro',
      {
        'Getting started': [
          'api/start/intro',
          'api/start/install',
          'api/start/basics',
          'api/start/create',
          'api/start/api.consts',
          'api/start/api.query',
          'api/start/api.rpc',
          'api/start/api.query.subs',
          'api/start/api.query.multi',
          'api/start/api.query.other',
          'api/start/api.tx',
          'api/start/keyring',
          'api/start/api.tx.subs',
          'api/start/api.tx.wrap',
          'api/start/types.basics',
          'api/start/types.extend',
          'api/start/rpc.custom',
          'api/start/types.create',
          'api/start/typescript',
          'api/start/typescript.user'
        ],
        Cookbook: [
          'api/cookbook/intro',
          'api/cookbook/blocks',
          'api/cookbook/storage',
          'api/cookbook/tx'
        ],
        Examples: [
          'api/examples/promise/intro',
          'api/examples/promise/simple-connect',
          'api/examples/promise/listen-to-blocks',
          'api/examples/promise/listen-to-balance-change',
          'api/examples/promise/unsubscribe',
          'api/examples/promise/read-storage',
          'api/examples/promise/read-storage-at',
          'api/examples/promise/make-transfer',
          'api/examples/promise/system-events',
          'api/examples/promise/transfer-events',
          'api/examples/promise/upgrade-chain',
          'api/examples/promise/typegen'
        ]
      },
      'api/FAQ'
    ],
    Substrate: [
      'substrate/intro',
      'substrate/rpc',
      'substrate/constants',
      'substrate/storage',
      'substrate/extrinsics',
      'substrate/events',
      'substrate/errors'
    ]
  },
};
