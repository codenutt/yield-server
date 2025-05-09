module.exports = {
  farmingRangeABI: [
    {
      inputs: [
        { internalType: 'address', name: '_rewardManager', type: 'address' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'campaignID',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'contract IERC20',
          name: 'stakingToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'contract IERC20',
          name: 'rewardToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'startBlock',
          type: 'uint256',
        },
      ],
      name: 'AddCampaignInfo',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'campaignID',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'phase',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'endBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'rewardPerBlock',
          type: 'uint256',
        },
      ],
      name: 'AddRewardInfo',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'campaign',
          type: 'uint256',
        },
      ],
      name: 'Deposit',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'campaign',
          type: 'uint256',
        },
      ],
      name: 'EmergencyWithdraw',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'campaignID',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'phase',
          type: 'uint256',
        },
      ],
      name: 'RemoveRewardInfo',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'rewardInfoLimit',
          type: 'uint256',
        },
      ],
      name: 'SetRewardInfoLimit',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'campaignID',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'phase',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'endBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'rewardPerBlock',
          type: 'uint256',
        },
      ],
      name: 'UpdateRewardInfo',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'campaign',
          type: 'uint256',
        },
      ],
      name: 'Withdraw',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'contract IERC20',
          name: '_stakingToken',
          type: 'address',
        },
        {
          internalType: 'contract IERC20',
          name: '_rewardToken',
          type: 'address',
        },
        { internalType: 'uint256', name: '_startBlock', type: 'uint256' },
      ],
      name: 'addCampaignInfo',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_campaignID', type: 'uint256' },
        { internalType: 'uint256', name: '_endBlock', type: 'uint256' },
        { internalType: 'uint256', name: '_rewardPerBlock', type: 'uint256' },
      ],
      name: 'addRewardInfo',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_campaignID', type: 'uint256' },
        { internalType: 'uint256[]', name: '_endBlock', type: 'uint256[]' },
        {
          internalType: 'uint256[]',
          name: '_rewardPerBlock',
          type: 'uint256[]',
        },
      ],
      name: 'addRewardInfoMultiple',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'arbitrumBlockNumber',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'contract IERC20', name: '_token', type: 'address' },
        { internalType: 'address', name: '_from', type: 'address' },
        { internalType: 'address', name: '_to', type: 'address' },
        { internalType: 'uint256', name: '_amount', type: 'uint256' },
      ],
      name: 'attemptTransfer',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      name: 'campaignInfo',
      outputs: [
        {
          internalType: 'contract IERC20',
          name: 'stakingToken',
          type: 'address',
        },
        {
          internalType: 'contract IERC20',
          name: 'rewardToken',
          type: 'address',
        },
        { internalType: 'uint256', name: 'startBlock', type: 'uint256' },
        { internalType: 'uint256', name: 'lastRewardBlock', type: 'uint256' },
        { internalType: 'uint256', name: 'accRewardPerShare', type: 'uint256' },
        { internalType: 'uint256', name: 'totalStaked', type: 'uint256' },
        { internalType: 'uint256', name: 'totalRewards', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'campaignInfoLen',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      name: 'campaignRewardInfo',
      outputs: [
        { internalType: 'uint256', name: 'endBlock', type: 'uint256' },
        { internalType: 'uint256', name: 'rewardPerBlock', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_campaignID', type: 'uint256' },
      ],
      name: 'currentEndBlock',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_campaignID', type: 'uint256' },
      ],
      name: 'currentRewardPerBlock',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_campaignID', type: 'uint256' },
        { internalType: 'uint256', name: '_amount', type: 'uint256' },
      ],
      name: 'deposit',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_campaignID', type: 'uint256' },
        { internalType: 'uint256', name: '_amount', type: 'uint256' },
        { internalType: 'bool', name: '_approveMax', type: 'bool' },
        { internalType: 'uint256', name: '_deadline', type: 'uint256' },
        { internalType: 'uint8', name: '_v', type: 'uint8' },
        { internalType: 'bytes32', name: '_r', type: 'bytes32' },
        { internalType: 'bytes32', name: '_s', type: 'bytes32' },
      ],
      name: 'depositWithPermit',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_campaignID', type: 'uint256' },
      ],
      name: 'emergencyWithdraw',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_from', type: 'uint256' },
        { internalType: 'uint256', name: '_to', type: 'uint256' },
        { internalType: 'uint256', name: '_endBlock', type: 'uint256' },
      ],
      name: 'getMultiplier',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256[]', name: '_campaignIDs', type: 'uint256[]' },
      ],
      name: 'harvest',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'massUpdateCampaigns',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_campaignID', type: 'uint256' },
        { internalType: 'address', name: '_user', type: 'address' },
      ],
      name: 'pendingReward',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_campaignID', type: 'uint256' },
      ],
      name: 'removeLastRewardInfo',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_campaignID', type: 'uint256' },
      ],
      name: 'rewardInfoLen',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'rewardInfoLimit',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'rewardManager',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_updatedRewardInfoLimit',
          type: 'uint256',
        },
      ],
      name: 'setRewardInfoLimit',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_campaignID', type: 'uint256' },
      ],
      name: 'updateCampaign',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256[]', name: '_campaignID', type: 'uint256[]' },
        {
          internalType: 'uint256[][]',
          name: '_rewardIndex',
          type: 'uint256[][]',
        },
        { internalType: 'uint256[][]', name: '_endBlock', type: 'uint256[][]' },
        {
          internalType: 'uint256[][]',
          name: '_rewardPerBlock',
          type: 'uint256[][]',
        },
      ],
      name: 'updateCampaignsRewards',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_campaignID', type: 'uint256' },
        { internalType: 'uint256', name: '_rewardIndex', type: 'uint256' },
        { internalType: 'uint256', name: '_endBlock', type: 'uint256' },
        { internalType: 'uint256', name: '_rewardPerBlock', type: 'uint256' },
      ],
      name: 'updateRewardInfo',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_campaignID', type: 'uint256' },
        { internalType: 'uint256[]', name: '_rewardIndex', type: 'uint256[]' },
        { internalType: 'uint256[]', name: '_endBlock', type: 'uint256[]' },
        {
          internalType: 'uint256[]',
          name: '_rewardPerBlock',
          type: 'uint256[]',
        },
      ],
      name: 'updateRewardMultiple',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
        { internalType: 'address', name: '', type: 'address' },
      ],
      name: 'userInfo',
      outputs: [
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
        { internalType: 'uint256', name: 'rewardDebt', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_campaignID', type: 'uint256' },
        { internalType: 'uint256', name: '_amount', type: 'uint256' },
      ],
      name: 'withdraw',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  usdnABI: [
    {
      inputs: [
        { internalType: 'address', name: 'minter', type: 'address' },
        { internalType: 'address', name: 'rebaser', type: 'address' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    { inputs: [], name: 'AccessControlBadConfirmation', type: 'error' },
    {
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
        { internalType: 'bytes32', name: 'neededRole', type: 'bytes32' },
      ],
      name: 'AccessControlUnauthorizedAccount',
      type: 'error',
    },
    { inputs: [], name: 'ECDSAInvalidSignature', type: 'error' },
    {
      inputs: [{ internalType: 'uint256', name: 'length', type: 'uint256' }],
      name: 'ECDSAInvalidSignatureLength',
      type: 'error',
    },
    {
      inputs: [{ internalType: 'bytes32', name: 's', type: 'bytes32' }],
      name: 'ECDSAInvalidSignatureS',
      type: 'error',
    },
    {
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'allowance', type: 'uint256' },
        { internalType: 'uint256', name: 'needed', type: 'uint256' },
      ],
      name: 'ERC20InsufficientAllowance',
      type: 'error',
    },
    {
      inputs: [
        { internalType: 'address', name: 'sender', type: 'address' },
        { internalType: 'uint256', name: 'balance', type: 'uint256' },
        { internalType: 'uint256', name: 'needed', type: 'uint256' },
      ],
      name: 'ERC20InsufficientBalance',
      type: 'error',
    },
    {
      inputs: [{ internalType: 'address', name: 'approver', type: 'address' }],
      name: 'ERC20InvalidApprover',
      type: 'error',
    },
    {
      inputs: [{ internalType: 'address', name: 'receiver', type: 'address' }],
      name: 'ERC20InvalidReceiver',
      type: 'error',
    },
    {
      inputs: [{ internalType: 'address', name: 'sender', type: 'address' }],
      name: 'ERC20InvalidSender',
      type: 'error',
    },
    {
      inputs: [{ internalType: 'address', name: 'spender', type: 'address' }],
      name: 'ERC20InvalidSpender',
      type: 'error',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'deadline', type: 'uint256' }],
      name: 'ERC2612ExpiredSignature',
      type: 'error',
    },
    {
      inputs: [
        { internalType: 'address', name: 'signer', type: 'address' },
        { internalType: 'address', name: 'owner', type: 'address' },
      ],
      name: 'ERC2612InvalidSigner',
      type: 'error',
    },
    {
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
        { internalType: 'uint256', name: 'currentNonce', type: 'uint256' },
      ],
      name: 'InvalidAccountNonce',
      type: 'error',
    },
    { inputs: [], name: 'InvalidShortString', type: 'error' },
    {
      inputs: [{ internalType: 'string', name: 'str', type: 'string' }],
      name: 'StringTooLong',
      type: 'error',
    },
    {
      inputs: [
        { internalType: 'address', name: 'sender', type: 'address' },
        { internalType: 'uint256', name: 'balance', type: 'uint256' },
        { internalType: 'uint256', name: 'needed', type: 'uint256' },
      ],
      name: 'UsdnInsufficientSharesBalance',
      type: 'error',
    },
    { inputs: [], name: 'UsdnInvalidDivisor', type: 'error' },
    {
      inputs: [{ internalType: 'uint256', name: 'value', type: 'uint256' }],
      name: 'UsdnMaxTokensExceeded',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [],
      name: 'EIP712DomainChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldDivisor',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newDivisor',
          type: 'uint256',
        },
      ],
      name: 'Rebase',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract IRebaseCallback',
          name: 'newHandler',
          type: 'address',
        },
      ],
      name: 'RebaseHandlerUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'previousAdminRole',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'newAdminRole',
          type: 'bytes32',
        },
      ],
      name: 'RoleAdminChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleGranted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleRevoked',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [],
      name: 'DEFAULT_ADMIN_ROLE',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'DOMAIN_SEPARATOR',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'MAX_DIVISOR',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'MINTER_ROLE',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'MIN_DIVISOR',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'REBASER_ROLE',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'owner', type: 'address' },
        { internalType: 'address', name: 'spender', type: 'address' },
      ],
      name: 'allowance',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'value', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ internalType: 'uint256', name: 'balance_', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'value', type: 'uint256' }],
      name: 'burn',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
        { internalType: 'uint256', name: 'value', type: 'uint256' },
      ],
      name: 'burnFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'value', type: 'uint256' }],
      name: 'burnShares',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
        { internalType: 'uint256', name: 'value', type: 'uint256' },
      ],
      name: 'burnSharesFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'amountTokens', type: 'uint256' },
      ],
      name: 'convertToShares',
      outputs: [{ internalType: 'uint256', name: 'shares_', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'amountShares', type: 'uint256' },
      ],
      name: 'convertToTokens',
      outputs: [{ internalType: 'uint256', name: 'tokens_', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'amountShares', type: 'uint256' },
      ],
      name: 'convertToTokensRoundUp',
      outputs: [{ internalType: 'uint256', name: 'tokens_', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'divisor',
      outputs: [{ internalType: 'uint256', name: 'divisor_', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'eip712Domain',
      outputs: [
        { internalType: 'bytes1', name: 'fields', type: 'bytes1' },
        { internalType: 'string', name: 'name', type: 'string' },
        { internalType: 'string', name: 'version', type: 'string' },
        { internalType: 'uint256', name: 'chainId', type: 'uint256' },
        { internalType: 'address', name: 'verifyingContract', type: 'address' },
        { internalType: 'bytes32', name: 'salt', type: 'bytes32' },
        { internalType: 'uint256[]', name: 'extensions', type: 'uint256[]' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
      name: 'getRoleAdmin',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: 'role', type: 'bytes32' },
        { internalType: 'address', name: 'account', type: 'address' },
      ],
      name: 'grantRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: 'role', type: 'bytes32' },
        { internalType: 'address', name: 'account', type: 'address' },
      ],
      name: 'hasRole',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'maxTokens',
      outputs: [
        { internalType: 'uint256', name: 'maxTokens_', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'mint',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'amount', type: 'uint256' },
      ],
      name: 'mintShares',
      outputs: [
        { internalType: 'uint256', name: 'mintedTokens_', type: 'uint256' },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
      name: 'nonces',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'owner', type: 'address' },
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'value', type: 'uint256' },
        { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        { internalType: 'uint8', name: 'v', type: 'uint8' },
        { internalType: 'bytes32', name: 'r', type: 'bytes32' },
        { internalType: 'bytes32', name: 's', type: 'bytes32' },
      ],
      name: 'permit',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'newDivisor', type: 'uint256' },
      ],
      name: 'rebase',
      outputs: [
        { internalType: 'bool', name: 'rebased_', type: 'bool' },
        { internalType: 'uint256', name: 'oldDivisor_', type: 'uint256' },
        { internalType: 'bytes', name: 'callbackResult_', type: 'bytes' },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'rebaseHandler',
      outputs: [
        {
          internalType: 'contract IRebaseCallback',
          name: 'rebaseHandler_',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: 'role', type: 'bytes32' },
        {
          internalType: 'address',
          name: 'callerConfirmation',
          type: 'address',
        },
      ],
      name: 'renounceRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: 'role', type: 'bytes32' },
        { internalType: 'address', name: 'account', type: 'address' },
      ],
      name: 'revokeRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IRebaseCallback',
          name: 'newHandler',
          type: 'address',
        },
      ],
      name: 'setRebaseHandler',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
      name: 'sharesOf',
      outputs: [{ internalType: 'uint256', name: 'shares_', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
      name: 'supportsInterface',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalShares',
      outputs: [{ internalType: 'uint256', name: 'shares_', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        { internalType: 'uint256', name: 'totalSupply_', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'value', type: 'uint256' },
      ],
      name: 'transfer',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'from', type: 'address' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'value', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'value', type: 'uint256' },
      ],
      name: 'transferShares',
      outputs: [{ internalType: 'bool', name: 'success_', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'from', type: 'address' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'value', type: 'uint256' },
      ],
      name: 'transferSharesFrom',
      outputs: [{ internalType: 'bool', name: 'success_', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  usdnProtocolABI: [
    { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
    { inputs: [], name: 'AccessControlBadConfirmation', type: 'error' },
    {
      inputs: [{ internalType: 'uint48', name: 'schedule', type: 'uint48' }],
      name: 'AccessControlEnforcedDefaultAdminDelay',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AccessControlEnforcedDefaultAdminRules',
      type: 'error',
    },
    {
      inputs: [
        { internalType: 'address', name: 'defaultAdmin', type: 'address' },
      ],
      name: 'AccessControlInvalidDefaultAdmin',
      type: 'error',
    },
    {
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
        { internalType: 'bytes32', name: 'neededRole', type: 'bytes32' },
      ],
      name: 'AccessControlUnauthorizedAccount',
      type: 'error',
    },
    { inputs: [], name: 'EnforcedPause', type: 'error' },
    { inputs: [], name: 'ExpectedPause', type: 'error' },
    {
      inputs: [],
      name: 'InitializableReentrancyGuardInvalidInitialization',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InitializableReentrancyGuardReentrantCall',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InitializableReentrancyGuardUninitialized',
      type: 'error',
    },
    { inputs: [], name: 'InvalidInitialization', type: 'error' },
    { inputs: [], name: 'NotInitializing', type: 'error' },
    {
      inputs: [
        { internalType: 'uint8', name: 'bits', type: 'uint8' },
        { internalType: 'uint256', name: 'value', type: 'uint256' },
      ],
      name: 'SafeCastOverflowedUintDowncast',
      type: 'error',
    },
    { inputs: [], name: 'UnauthorizedCallContext', type: 'error' },
    { inputs: [], name: 'UpgradeFailed', type: 'error' },
    { inputs: [], name: 'UsdnProtocolAmountReceivedTooSmall', type: 'error' },
    {
      inputs: [
        { internalType: 'uint128', name: 'amountToClose', type: 'uint128' },
        { internalType: 'uint128', name: 'positionAmount', type: 'uint128' },
      ],
      name: 'UsdnProtocolAmountToCloseHigherThanPositionAmount',
      type: 'error',
    },
    { inputs: [], name: 'UsdnProtocolDeadlineExceeded', type: 'error' },
    { inputs: [], name: 'UsdnProtocolDepositTooSmall', type: 'error' },
    { inputs: [], name: 'UsdnProtocolEmptyVault', type: 'error' },
    { inputs: [], name: 'UsdnProtocolEtherRefundFailed', type: 'error' },
    {
      inputs: [
        { internalType: 'int256', name: 'imbalanceBps', type: 'int256' },
      ],
      name: 'UsdnProtocolImbalanceLimitReached',
      type: 'error',
    },
    { inputs: [], name: 'UsdnProtocolInsufficientOracleFee', type: 'error' },
    { inputs: [], name: 'UsdnProtocolInvalidAddressTo', type: 'error' },
    { inputs: [], name: 'UsdnProtocolInvalidAddressValidator', type: 'error' },
    {
      inputs: [{ internalType: 'uint8', name: 'assetDecimals', type: 'uint8' }],
      name: 'UsdnProtocolInvalidAssetDecimals',
      type: 'error',
    },
    {
      inputs: [],
      name: 'UsdnProtocolInvalidBurnSdexOnDepositRatio',
      type: 'error',
    },
    {
      inputs: [],
      name: 'UsdnProtocolInvalidDelegationSignature',
      type: 'error',
    },
    { inputs: [], name: 'UsdnProtocolInvalidEMAPeriod', type: 'error' },
    {
      inputs: [],
      name: 'UsdnProtocolInvalidExpoImbalanceLimit',
      type: 'error',
    },
    { inputs: [], name: 'UsdnProtocolInvalidFeeCollector', type: 'error' },
    { inputs: [], name: 'UsdnProtocolInvalidFundingSF', type: 'error' },
    {
      inputs: [],
      name: 'UsdnProtocolInvalidLiquidationIteration',
      type: 'error',
    },
    {
      inputs: [],
      name: 'UsdnProtocolInvalidLiquidationPenalty',
      type: 'error',
    },
    {
      inputs: [
        { internalType: 'uint128', name: 'liquidationPrice', type: 'uint128' },
        { internalType: 'uint128', name: 'startPrice', type: 'uint128' },
      ],
      name: 'UsdnProtocolInvalidLiquidationPrice',
      type: 'error',
    },
    {
      inputs: [],
      name: 'UsdnProtocolInvalidLiquidationRewardsManagerAddress',
      type: 'error',
    },
    { inputs: [], name: 'UsdnProtocolInvalidLongExpo', type: 'error' },
    {
      inputs: [],
      name: 'UsdnProtocolInvalidLongImbalanceTarget',
      type: 'error',
    },
    { inputs: [], name: 'UsdnProtocolInvalidMaxLeverage', type: 'error' },
    { inputs: [], name: 'UsdnProtocolInvalidMiddlewareAddress', type: 'error' },
    {
      inputs: [],
      name: 'UsdnProtocolInvalidMiddlewareLowLatencyDelay',
      type: 'error',
    },
    { inputs: [], name: 'UsdnProtocolInvalidMinLeverage', type: 'error' },
    { inputs: [], name: 'UsdnProtocolInvalidMinLongPosition', type: 'error' },
    { inputs: [], name: 'UsdnProtocolInvalidPendingAction', type: 'error' },
    { inputs: [], name: 'UsdnProtocolInvalidPendingActionData', type: 'error' },
    { inputs: [], name: 'UsdnProtocolInvalidPositionFee', type: 'error' },
    { inputs: [], name: 'UsdnProtocolInvalidProtocolFeeBps', type: 'error' },
    { inputs: [], name: 'UsdnProtocolInvalidRebalancerBonus', type: 'error' },
    {
      inputs: [],
      name: 'UsdnProtocolInvalidRebalancerMinAssetDeposit',
      type: 'error',
    },
    {
      inputs: [],
      name: 'UsdnProtocolInvalidRebalancerMinLeverage',
      type: 'error',
    },
    { inputs: [], name: 'UsdnProtocolInvalidRebalancerTick', type: 'error' },
    { inputs: [], name: 'UsdnProtocolInvalidSafetyMarginBps', type: 'error' },
    { inputs: [], name: 'UsdnProtocolInvalidSdexRewardsRatio', type: 'error' },
    { inputs: [], name: 'UsdnProtocolInvalidSecurityDeposit', type: 'error' },
    { inputs: [], name: 'UsdnProtocolInvalidTargetUsdnPrice', type: 'error' },
    { inputs: [], name: 'UsdnProtocolInvalidTokenDecimals', type: 'error' },
    {
      inputs: [
        { internalType: 'address', name: 'usdnAddress', type: 'address' },
      ],
      name: 'UsdnProtocolInvalidUsdn',
      type: 'error',
    },
    {
      inputs: [],
      name: 'UsdnProtocolInvalidUsdnRebaseThreshold',
      type: 'error',
    },
    { inputs: [], name: 'UsdnProtocolInvalidValidatorDeadline', type: 'error' },
    { inputs: [], name: 'UsdnProtocolInvalidVaultFee', type: 'error' },
    { inputs: [], name: 'UsdnProtocolLeverageTooHigh', type: 'error' },
    { inputs: [], name: 'UsdnProtocolLeverageTooLow', type: 'error' },
    {
      inputs: [
        { internalType: 'uint128', name: 'liquidationPrice', type: 'uint128' },
        {
          internalType: 'uint128',
          name: 'maxLiquidationPrice',
          type: 'uint128',
        },
      ],
      name: 'UsdnProtocolLiquidationPriceSafetyMargin',
      type: 'error',
    },
    { inputs: [], name: 'UsdnProtocolLongPositionTooSmall', type: 'error' },
    { inputs: [], name: 'UsdnProtocolMinInitAmount', type: 'error' },
    { inputs: [], name: 'UsdnProtocolNoPendingAction', type: 'error' },
    {
      inputs: [{ internalType: 'address', name: 'validator', type: 'address' }],
      name: 'UsdnProtocolNotEligibleForRefund',
      type: 'error',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'currentVersion', type: 'uint256' },
        { internalType: 'uint256', name: 'providedVersion', type: 'uint256' },
      ],
      name: 'UsdnProtocolOutdatedTick',
      type: 'error',
    },
    { inputs: [], name: 'UsdnProtocolPaymentCallbackFailed', type: 'error' },
    { inputs: [], name: 'UsdnProtocolPendingAction', type: 'error' },
    { inputs: [], name: 'UsdnProtocolPositionNotValidated', type: 'error' },
    { inputs: [], name: 'UsdnProtocolSecurityDepositTooLow', type: 'error' },
    { inputs: [], name: 'UsdnProtocolSlippageMaxPriceExceeded', type: 'error' },
    { inputs: [], name: 'UsdnProtocolSlippageMinPriceExceeded', type: 'error' },
    { inputs: [], name: 'UsdnProtocolTimestampTooOld', type: 'error' },
    { inputs: [], name: 'UsdnProtocolUnauthorized', type: 'error' },
    { inputs: [], name: 'UsdnProtocolUnexpectedBalance', type: 'error' },
    { inputs: [], name: 'UsdnProtocolZeroAmount', type: 'error' },
    { inputs: [], name: 'UsdnProtocolZeroLongTradingExpo', type: 'error' },
    { inputs: [], name: 'UsdnProtocolZeroTotalExpo', type: 'error' },
    {
      anonymous: false,
      inputs: [],
      name: 'DefaultAdminDelayChangeCanceled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint48',
          name: 'newDelay',
          type: 'uint48',
        },
        {
          indexed: false,
          internalType: 'uint48',
          name: 'effectSchedule',
          type: 'uint48',
        },
      ],
      name: 'DefaultAdminDelayChangeScheduled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [],
      name: 'DefaultAdminTransferCanceled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint48',
          name: 'acceptSchedule',
          type: 'uint48',
        },
      ],
      name: 'DefaultAdminTransferScheduled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [],
      name: 'EIP712DomainChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint64',
          name: 'version',
          type: 'uint64',
        },
      ],
      name: 'Initialized',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'Paused',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'previousAdminRole',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'newAdminRole',
          type: 'bytes32',
        },
      ],
      name: 'RoleAdminChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleGranted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleRevoked',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'Unpaused',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'implementation',
          type: 'address',
        },
      ],
      name: 'Upgraded',
      type: 'event',
    },
    { stateMutability: 'nonpayable', type: 'fallback' },
    {
      inputs: [],
      name: 'DEFAULT_ADMIN_ROLE',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'acceptDefaultAdminTransfer',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'newAdmin', type: 'address' }],
      name: 'beginDefaultAdminTransfer',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'cancelDefaultAdminTransfer',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint48', name: 'newDelay', type: 'uint48' }],
      name: 'changeDefaultAdminDelay',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'defaultAdmin',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'defaultAdminDelay',
      outputs: [{ internalType: 'uint48', name: '', type: 'uint48' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'defaultAdminDelayIncreaseWait',
      outputs: [{ internalType: 'uint48', name: '', type: 'uint48' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'domainSeparatorV4',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'eip712Domain',
      outputs: [
        { internalType: 'bytes1', name: 'fields', type: 'bytes1' },
        { internalType: 'string', name: 'name', type: 'string' },
        { internalType: 'string', name: 'version', type: 'string' },
        { internalType: 'uint256', name: 'chainId', type: 'uint256' },
        { internalType: 'address', name: 'verifyingContract', type: 'address' },
        { internalType: 'bytes32', name: 'salt', type: 'bytes32' },
        { internalType: 'uint256[]', name: 'extensions', type: 'uint256[]' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint128', name: 'timestamp', type: 'uint128' }],
      name: 'funding',
      outputs: [
        { internalType: 'int256', name: 'funding_', type: 'int256' },
        { internalType: 'int256', name: 'fundingPerDay_', type: 'int256' },
        { internalType: 'int256', name: 'oldLongExpo_', type: 'int256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint128', name: 'price', type: 'uint128' }],
      name: 'getEffectiveTickForPrice',
      outputs: [{ internalType: 'int24', name: 'tick_', type: 'int24' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint128', name: 'price', type: 'uint128' },
        { internalType: 'uint256', name: 'assetPrice', type: 'uint256' },
        { internalType: 'uint256', name: 'longTradingExpo', type: 'uint256' },
        {
          components: [
            { internalType: 'uint256', name: 'hi', type: 'uint256' },
            { internalType: 'uint256', name: 'lo', type: 'uint256' },
          ],
          internalType: 'struct HugeUint.Uint512',
          name: 'accumulator',
          type: 'tuple',
        },
        { internalType: 'int24', name: 'tickSpacing', type: 'int24' },
      ],
      name: 'getEffectiveTickForPrice',
      outputs: [{ internalType: 'int24', name: 'tick_', type: 'int24' }],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint128',
          name: 'desiredLiqPriceWithoutPenalty',
          type: 'uint128',
        },
        { internalType: 'uint256', name: 'assetPrice', type: 'uint256' },
        { internalType: 'uint256', name: 'longTradingExpo', type: 'uint256' },
        {
          components: [
            { internalType: 'uint256', name: 'hi', type: 'uint256' },
            { internalType: 'uint256', name: 'lo', type: 'uint256' },
          ],
          internalType: 'struct HugeUint.Uint512',
          name: 'accumulator',
          type: 'tuple',
        },
        { internalType: 'int24', name: 'tickSpacing', type: 'int24' },
        { internalType: 'uint24', name: 'liquidationPenalty', type: 'uint24' },
      ],
      name: 'getLiqPriceFromDesiredLiqPrice',
      outputs: [
        { internalType: 'uint128', name: 'liqPrice_', type: 'uint128' },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            { internalType: 'int24', name: 'tick', type: 'int24' },
            { internalType: 'uint256', name: 'tickVersion', type: 'uint256' },
            { internalType: 'uint256', name: 'index', type: 'uint256' },
          ],
          internalType: 'struct IUsdnProtocolTypes.PositionId',
          name: 'posId',
          type: 'tuple',
        },
      ],
      name: 'getLongPosition',
      outputs: [
        {
          components: [
            { internalType: 'bool', name: 'validated', type: 'bool' },
            { internalType: 'uint40', name: 'timestamp', type: 'uint40' },
            { internalType: 'address', name: 'user', type: 'address' },
            { internalType: 'uint128', name: 'totalExpo', type: 'uint128' },
            { internalType: 'uint128', name: 'amount', type: 'uint128' },
          ],
          internalType: 'struct IUsdnProtocolTypes.Position',
          name: 'pos_',
          type: 'tuple',
        },
        { internalType: 'uint24', name: 'liquidationPenalty_', type: 'uint24' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            { internalType: 'int24', name: 'tick', type: 'int24' },
            { internalType: 'uint256', name: 'tickVersion', type: 'uint256' },
            { internalType: 'uint256', name: 'index', type: 'uint256' },
          ],
          internalType: 'struct IUsdnProtocolTypes.PositionId',
          name: 'posId',
          type: 'tuple',
        },
        { internalType: 'uint128', name: 'price', type: 'uint128' },
        { internalType: 'uint128', name: 'timestamp', type: 'uint128' },
      ],
      name: 'getPositionValue',
      outputs: [{ internalType: 'int256', name: 'value_', type: 'int256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
      name: 'getRoleAdmin',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'int24', name: 'tick', type: 'int24' }],
      name: 'getTickLiquidationPenalty',
      outputs: [
        { internalType: 'uint24', name: 'liquidationPenalty_', type: 'uint24' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: 'role', type: 'bytes32' },
        { internalType: 'address', name: 'account', type: 'address' },
      ],
      name: 'grantRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: 'role', type: 'bytes32' },
        { internalType: 'address', name: 'account', type: 'address' },
      ],
      name: 'hasRole',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint128', name: 'depositAmount', type: 'uint128' },
        { internalType: 'uint128', name: 'longAmount', type: 'uint128' },
        { internalType: 'uint128', name: 'desiredLiqPrice', type: 'uint128' },
        { internalType: 'bytes', name: 'currentPriceData', type: 'bytes' },
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'contract IUsdn', name: 'usdn', type: 'address' },
        {
          internalType: 'contract IERC20Metadata',
          name: 'sdex',
          type: 'address',
        },
        {
          internalType: 'contract IERC20Metadata',
          name: 'asset',
          type: 'address',
        },
        {
          internalType: 'contract IBaseOracleMiddleware',
          name: 'oracleMiddleware',
          type: 'address',
        },
        {
          internalType: 'contract IBaseLiquidationRewardsManager',
          name: 'liquidationRewardsManager',
          type: 'address',
        },
        { internalType: 'int24', name: 'tickSpacing', type: 'int24' },
        { internalType: 'address', name: 'feeCollector', type: 'address' },
        {
          internalType: 'contract IUsdnProtocolFallback',
          name: 'protocolFallback',
          type: 'address',
        },
      ],
      name: 'initializeStorage',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            { internalType: 'int24', name: 'tick', type: 'int24' },
            { internalType: 'uint256', name: 'tickVersion', type: 'uint256' },
            { internalType: 'uint256', name: 'index', type: 'uint256' },
          ],
          internalType: 'struct IUsdnProtocolTypes.PositionId',
          name: 'posId',
          type: 'tuple',
        },
        { internalType: 'uint128', name: 'amountToClose', type: 'uint128' },
        { internalType: 'uint256', name: 'userMinPrice', type: 'uint256' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'address payable', name: 'validator', type: 'address' },
        { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        { internalType: 'bytes', name: 'currentPriceData', type: 'bytes' },
        {
          components: [
            { internalType: 'bytes[]', name: 'priceData', type: 'bytes[]' },
            {
              internalType: 'uint128[]',
              name: 'rawIndices',
              type: 'uint128[]',
            },
          ],
          internalType: 'struct IUsdnProtocolTypes.PreviousActionsData',
          name: 'previousActionsData',
          type: 'tuple',
        },
        { internalType: 'bytes', name: 'delegationSignature', type: 'bytes' },
      ],
      name: 'initiateClosePosition',
      outputs: [
        {
          internalType: 'enum IUsdnProtocolTypes.LongActionOutcome',
          name: 'outcome_',
          type: 'uint8',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint128', name: 'amount', type: 'uint128' },
        { internalType: 'uint256', name: 'sharesOutMin', type: 'uint256' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'address payable', name: 'validator', type: 'address' },
        { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        { internalType: 'bytes', name: 'currentPriceData', type: 'bytes' },
        {
          components: [
            { internalType: 'bytes[]', name: 'priceData', type: 'bytes[]' },
            {
              internalType: 'uint128[]',
              name: 'rawIndices',
              type: 'uint128[]',
            },
          ],
          internalType: 'struct IUsdnProtocolTypes.PreviousActionsData',
          name: 'previousActionsData',
          type: 'tuple',
        },
      ],
      name: 'initiateDeposit',
      outputs: [{ internalType: 'bool', name: 'success_', type: 'bool' }],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint128', name: 'amount', type: 'uint128' },
        { internalType: 'uint128', name: 'desiredLiqPrice', type: 'uint128' },
        { internalType: 'uint128', name: 'userMaxPrice', type: 'uint128' },
        { internalType: 'uint256', name: 'userMaxLeverage', type: 'uint256' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'address payable', name: 'validator', type: 'address' },
        { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        { internalType: 'bytes', name: 'currentPriceData', type: 'bytes' },
        {
          components: [
            { internalType: 'bytes[]', name: 'priceData', type: 'bytes[]' },
            {
              internalType: 'uint128[]',
              name: 'rawIndices',
              type: 'uint128[]',
            },
          ],
          internalType: 'struct IUsdnProtocolTypes.PreviousActionsData',
          name: 'previousActionsData',
          type: 'tuple',
        },
      ],
      name: 'initiateOpenPosition',
      outputs: [
        { internalType: 'bool', name: 'isInitiated_', type: 'bool' },
        {
          components: [
            { internalType: 'int24', name: 'tick', type: 'int24' },
            { internalType: 'uint256', name: 'tickVersion', type: 'uint256' },
            { internalType: 'uint256', name: 'index', type: 'uint256' },
          ],
          internalType: 'struct IUsdnProtocolTypes.PositionId',
          name: 'posId_',
          type: 'tuple',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint152', name: 'usdnShares', type: 'uint152' },
        { internalType: 'uint256', name: 'amountOutMin', type: 'uint256' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'address payable', name: 'validator', type: 'address' },
        { internalType: 'uint256', name: 'deadline', type: 'uint256' },
        { internalType: 'bytes', name: 'currentPriceData', type: 'bytes' },
        {
          components: [
            { internalType: 'bytes[]', name: 'priceData', type: 'bytes[]' },
            {
              internalType: 'uint128[]',
              name: 'rawIndices',
              type: 'uint128[]',
            },
          ],
          internalType: 'struct IUsdnProtocolTypes.PreviousActionsData',
          name: 'previousActionsData',
          type: 'tuple',
        },
      ],
      name: 'initiateWithdrawal',
      outputs: [{ internalType: 'bool', name: 'success_', type: 'bool' }],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes', name: 'currentPriceData', type: 'bytes' },
      ],
      name: 'liquidate',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'totalPositions',
              type: 'uint256',
            },
            { internalType: 'uint256', name: 'totalExpo', type: 'uint256' },
            {
              internalType: 'int256',
              name: 'remainingCollateral',
              type: 'int256',
            },
            { internalType: 'uint128', name: 'tickPrice', type: 'uint128' },
            {
              internalType: 'uint128',
              name: 'priceWithoutPenalty',
              type: 'uint128',
            },
          ],
          internalType: 'struct IUsdnProtocolTypes.LiqTickInfo[]',
          name: 'liquidatedTicks_',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint128', name: 'currentPrice', type: 'uint128' },
        { internalType: 'uint128', name: 'timestamp', type: 'uint128' },
      ],
      name: 'longAssetAvailableWithFunding',
      outputs: [
        { internalType: 'uint256', name: 'available_', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint128', name: 'currentPrice', type: 'uint128' },
        { internalType: 'uint128', name: 'timestamp', type: 'uint128' },
      ],
      name: 'longTradingExpoWithFunding',
      outputs: [{ internalType: 'uint256', name: 'expo_', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'minTick',
      outputs: [{ internalType: 'int24', name: 'tick_', type: 'int24' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'paused',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pendingDefaultAdmin',
      outputs: [
        { internalType: 'address', name: 'newAdmin', type: 'address' },
        { internalType: 'uint48', name: 'schedule', type: 'uint48' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pendingDefaultAdminDelay',
      outputs: [
        { internalType: 'uint48', name: 'newDelay', type: 'uint48' },
        { internalType: 'uint48', name: 'schedule', type: 'uint48' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'proxiableUUID',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: 'role', type: 'bytes32' },
        { internalType: 'address', name: 'account', type: 'address' },
      ],
      name: 'renounceRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'bytes32', name: 'role', type: 'bytes32' },
        { internalType: 'address', name: 'account', type: 'address' },
      ],
      name: 'revokeRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'rollbackDefaultAdminDelay',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
      name: 'supportsInterface',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            { internalType: 'int24', name: 'tick', type: 'int24' },
            { internalType: 'uint256', name: 'tickVersion', type: 'uint256' },
            { internalType: 'uint256', name: 'index', type: 'uint256' },
          ],
          internalType: 'struct IUsdnProtocolTypes.PositionId',
          name: 'posId',
          type: 'tuple',
        },
        { internalType: 'address', name: 'newOwner', type: 'address' },
        { internalType: 'bytes', name: 'delegationSignature', type: 'bytes' },
      ],
      name: 'transferPositionOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'newImplementation', type: 'address' },
        { internalType: 'bytes', name: 'data', type: 'bytes' },
      ],
      name: 'upgradeToAndCall',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint128', name: 'currentPrice', type: 'uint128' },
      ],
      name: 'usdnPrice',
      outputs: [{ internalType: 'uint256', name: 'price_', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint128', name: 'currentPrice', type: 'uint128' },
        { internalType: 'uint128', name: 'timestamp', type: 'uint128' },
      ],
      name: 'usdnPrice',
      outputs: [{ internalType: 'uint256', name: 'price_', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            { internalType: 'bytes[]', name: 'priceData', type: 'bytes[]' },
            {
              internalType: 'uint128[]',
              name: 'rawIndices',
              type: 'uint128[]',
            },
          ],
          internalType: 'struct IUsdnProtocolTypes.PreviousActionsData',
          name: 'previousActionsData',
          type: 'tuple',
        },
        { internalType: 'uint256', name: 'maxValidations', type: 'uint256' },
      ],
      name: 'validateActionablePendingActions',
      outputs: [
        { internalType: 'uint256', name: 'validatedActions_', type: 'uint256' },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address payable', name: 'validator', type: 'address' },
        { internalType: 'bytes', name: 'closePriceData', type: 'bytes' },
        {
          components: [
            { internalType: 'bytes[]', name: 'priceData', type: 'bytes[]' },
            {
              internalType: 'uint128[]',
              name: 'rawIndices',
              type: 'uint128[]',
            },
          ],
          internalType: 'struct IUsdnProtocolTypes.PreviousActionsData',
          name: 'previousActionsData',
          type: 'tuple',
        },
      ],
      name: 'validateClosePosition',
      outputs: [
        {
          internalType: 'enum IUsdnProtocolTypes.LongActionOutcome',
          name: 'outcome_',
          type: 'uint8',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address payable', name: 'validator', type: 'address' },
        { internalType: 'bytes', name: 'depositPriceData', type: 'bytes' },
        {
          components: [
            { internalType: 'bytes[]', name: 'priceData', type: 'bytes[]' },
            {
              internalType: 'uint128[]',
              name: 'rawIndices',
              type: 'uint128[]',
            },
          ],
          internalType: 'struct IUsdnProtocolTypes.PreviousActionsData',
          name: 'previousActionsData',
          type: 'tuple',
        },
      ],
      name: 'validateDeposit',
      outputs: [{ internalType: 'bool', name: 'success_', type: 'bool' }],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address payable', name: 'validator', type: 'address' },
        { internalType: 'bytes', name: 'openPriceData', type: 'bytes' },
        {
          components: [
            { internalType: 'bytes[]', name: 'priceData', type: 'bytes[]' },
            {
              internalType: 'uint128[]',
              name: 'rawIndices',
              type: 'uint128[]',
            },
          ],
          internalType: 'struct IUsdnProtocolTypes.PreviousActionsData',
          name: 'previousActionsData',
          type: 'tuple',
        },
      ],
      name: 'validateOpenPosition',
      outputs: [
        {
          internalType: 'enum IUsdnProtocolTypes.LongActionOutcome',
          name: 'outcome_',
          type: 'uint8',
        },
        {
          components: [
            { internalType: 'int24', name: 'tick', type: 'int24' },
            { internalType: 'uint256', name: 'tickVersion', type: 'uint256' },
            { internalType: 'uint256', name: 'index', type: 'uint256' },
          ],
          internalType: 'struct IUsdnProtocolTypes.PositionId',
          name: 'posId_',
          type: 'tuple',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address payable', name: 'validator', type: 'address' },
        { internalType: 'bytes', name: 'withdrawalPriceData', type: 'bytes' },
        {
          components: [
            { internalType: 'bytes[]', name: 'priceData', type: 'bytes[]' },
            {
              internalType: 'uint128[]',
              name: 'rawIndices',
              type: 'uint128[]',
            },
          ],
          internalType: 'struct IUsdnProtocolTypes.PreviousActionsData',
          name: 'previousActionsData',
          type: 'tuple',
        },
      ],
      name: 'validateWithdrawal',
      outputs: [{ internalType: 'bool', name: 'success_', type: 'bool' }],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint128', name: 'currentPrice', type: 'uint128' },
        { internalType: 'uint128', name: 'timestamp', type: 'uint128' },
      ],
      name: 'vaultAssetAvailableWithFunding',
      outputs: [
        { internalType: 'uint256', name: 'available_', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  wUsdnABI: [
    {
      type: 'function',
      name: 'DOMAIN_SEPARATOR',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'bytes32',
          internalType: 'bytes32',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'SHARES_RATIO',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'USDN',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'address',
          internalType: 'contract IUsdn',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'allowance',
      inputs: [
        {
          name: 'owner',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'spender',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [
        {
          name: '',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'approve',
      inputs: [
        {
          name: 'spender',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'value',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [
        {
          name: '',
          type: 'bool',
          internalType: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'balanceOf',
      inputs: [
        {
          name: 'account',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [
        {
          name: '',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'decimals',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'uint8',
          internalType: 'uint8',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'name',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'string',
          internalType: 'string',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'nonces',
      inputs: [
        {
          name: 'owner',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [
        {
          name: '',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'permit',
      inputs: [
        {
          name: 'owner',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'spender',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'value',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: 'deadline',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: 'v',
          type: 'uint8',
          internalType: 'uint8',
        },
        {
          name: 'r',
          type: 'bytes32',
          internalType: 'bytes32',
        },
        {
          name: 's',
          type: 'bytes32',
          internalType: 'bytes32',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'previewUnwrap',
      inputs: [
        {
          name: 'wusdnAmount',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [
        {
          name: 'usdnAmount_',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'previewUnwrapShares',
      inputs: [
        {
          name: 'wusdnAmount',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [
        {
          name: 'usdnSharesAmount_',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'previewWrap',
      inputs: [
        {
          name: 'usdnAmount',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [
        {
          name: 'wrappedAmount_',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'previewWrapShares',
      inputs: [
        {
          name: 'usdnShares',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [
        {
          name: 'wrappedAmount_',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'redemptionRate',
      inputs: [],
      outputs: [
        {
          name: 'usdnAmount_',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'symbol',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'string',
          internalType: 'string',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'totalSupply',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'totalUsdnBalance',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'totalUsdnShares',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'transfer',
      inputs: [
        {
          name: 'to',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'value',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [
        {
          name: '',
          type: 'bool',
          internalType: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'transferFrom',
      inputs: [
        {
          name: 'from',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'to',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'value',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [
        {
          name: '',
          type: 'bool',
          internalType: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'unwrap',
      inputs: [
        {
          name: 'wusdnAmount',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: 'to',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [
        {
          name: 'usdnAmount_',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'unwrap',
      inputs: [
        {
          name: 'wusdnAmount',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [
        {
          name: 'usdnAmount_',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'wrap',
      inputs: [
        {
          name: 'usdnAmount',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: 'to',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [
        {
          name: 'wrappedAmount_',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'wrap',
      inputs: [
        {
          name: 'usdnAmount',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [
        {
          name: 'wrappedAmount_',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'wrapShares',
      inputs: [
        {
          name: 'usdnShares',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: 'to',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [
        {
          name: 'wrappedAmount_',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
    },
    {
      type: 'event',
      name: 'Approval',
      inputs: [
        {
          name: 'owner',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'spender',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'value',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'Transfer',
      inputs: [
        {
          name: 'from',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'to',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'value',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'Unwrap',
      inputs: [
        {
          name: 'from',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'to',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'wusdnAmount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'usdnAmount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'Wrap',
      inputs: [
        {
          name: 'from',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'to',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'usdnAmount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'wusdnAmount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'error',
      name: 'WusdnInsufficientBalance',
      inputs: [
        {
          name: 'usdnAmount',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
    },
    {
      type: 'error',
      name: 'WusdnWrapZeroAmount',
      inputs: [],
    },
  ],
};
