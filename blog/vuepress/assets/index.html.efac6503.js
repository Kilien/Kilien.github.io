import{_ as e,o as n,c as i,a as s}from"./app.8c6f2f45.js";var r="/assets/7a60d5966bda4bd48be1bcc6ec4296c8.1eb0559d.svg";const d={},a=s(`<h3 id="\u57FA\u672C\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F9D\u8D56" aria-hidden="true">#</a> <strong>\u57FA\u672C\u4F9D\u8D56</strong></h3><div class="language-import ext-import line-numbers-mode"><pre class="language-import"><code>import { ethers } from &quot;ethers&quot;;
import _ from &quot;lodash&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4EA4\u6613\u91D1\u989D\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u4EA4\u6613\u91D1\u989D\u5904\u7406" aria-hidden="true">#</a> <strong>\u4EA4\u6613\u91D1\u989D\u5904\u7406</strong></h3><h4 id="\u9884\u5904\u7406\u6570\u636E\u91D1\u989D-\u6709-bug-\u4F8B\u5982-0-0079-\u7CBE\u5EA6-18-\u8F6C\u5316" tabindex="-1"><a class="header-anchor" href="#\u9884\u5904\u7406\u6570\u636E\u91D1\u989D-\u6709-bug-\u4F8B\u5982-0-0079-\u7CBE\u5EA6-18-\u8F6C\u5316" aria-hidden="true">#</a> <strong>\u9884\u5904\u7406\u6570\u636E\u91D1\u989D(\u6709 bug \u4F8B\u5982 0.0079,\u7CBE\u5EA6 18 \u8F6C\u5316)</strong></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export function toAmount(amount, tokenDecimals = 18) {
 let result = 0;
 if (amount * 1 &lt; 100) {
   result = _.multiply(amount * 1, 10 ** tokenDecimals).toString();
   console.log(result, amount, &quot;use--safeMath&quot;);
 } else {
   let points = (10 ** tokenDecimals).toString();
   let amountStr = amount.toString();
   result = new BN(amountStr).mul(new BN(points)).toString();
   console.log(result, amount, &quot;use--BN&quot;);
 }
 return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u9884\u5904\u7406\u6570\u636E\u91D1\u989D\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u9884\u5904\u7406\u6570\u636E\u91D1\u989D\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> <strong>\u9884\u5904\u7406\u6570\u636E\u91D1\u989D\u89E3\u51B3\u65B9\u6848</strong></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { ethers } from &quot;ethers&quot;;

export function toAmount(amount, tokenDecimals = 18) {
  return ethers.utils.parseUnits(amount, tokenDecimals)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4ECE\u5408\u7EA6\u62C9\u53D6\u6570\u636E\u8F6C\u5316-bignumber-10-\u8FDB\u5236\u5B57\u7B26\u4E32-\u4E0D\u5904\u7406\u7CBE\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u5408\u7EA6\u62C9\u53D6\u6570\u636E\u8F6C\u5316-bignumber-10-\u8FDB\u5236\u5B57\u7B26\u4E32-\u4E0D\u5904\u7406\u7CBE\u5EA6" aria-hidden="true">#</a> <strong>\u4ECE\u5408\u7EA6\u62C9\u53D6\u6570\u636E\u8F6C\u5316 Bignumber =&gt; 10 \u8FDB\u5236\u5B57\u7B26\u4E32(\u4E0D\u5904\u7406\u7CBE\u5EA6)</strong></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export function transBigNumber(object) {
 let isBig = ethers.BigNumber.isBigNumber(object);
 if (isBig) {
   return object.toString();
 }
 return object;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4ECE\u5408\u7EA6\u62C9\u53D6\u6570\u636E\u8F6C\u5316-bignumber-10-\u8FDB\u5236\u5B57\u7B26\u4E32-\u5904\u7406\u7CBE\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u5408\u7EA6\u62C9\u53D6\u6570\u636E\u8F6C\u5316-bignumber-10-\u8FDB\u5236\u5B57\u7B26\u4E32-\u5904\u7406\u7CBE\u5EA6" aria-hidden="true">#</a> <strong>\u4ECE\u5408\u7EA6\u62C9\u53D6\u6570\u636E\u8F6C\u5316 Bignumber =&gt; 10 \u8FDB\u5236\u5B57\u7B26\u4E32(\u5904\u7406\u7CBE\u5EA6)</strong></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export function receiveAmount(amount, tokenDecimals = 18) {
  let inNumber = transBigNumber(amount);
  let outAmount = ethers.utils.formatUnits(inNumber, tokenDecimals);
   outAmount = dealDecimals(outAmount, 10);
  return outAmount * 1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9519\u8BEF\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a> <strong>\u9519\u8BEF\u5904\u7406</strong></h3><h4 id="\u5F52\u96C6\u5904\u7406\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u5F52\u96C6\u5904\u7406\u9519\u8BEF" aria-hidden="true">#</a> <strong>\u5F52\u96C6\u5904\u7406\u9519\u8BEF</strong></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { Message } from &quot;@/hooks/useMessage&quot;;


export function handleRpcError(error) {
  if (!error) {
    console.error(&quot;other RpcError&quot;, &quot;local handleRpcError&quot;);
    return;
  }

  if (error.data &amp;&amp; error.data.message) {
    Message.error(error.data.message);
    return;
  }

  if (error.code === -32603) {
    Message.error(&quot;Internal JSON-RPC error&quot;);
    return;
  }

  if (error.code === 4001) {
    Message.error(&quot;Transaction rejected!&quot;);
    return;
  }

  if (error.message) {
    Message.error(error.message);
    return;
  }
  Message.error(&quot;Unexpected interruption of transaction&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8C03\u7528\u94FE\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528\u94FE\u76F8\u5173" aria-hidden="true">#</a> <strong>\u8C03\u7528\u94FE\u76F8\u5173</strong></h3><h4 id="\u83B7\u53D6\u5757\u9AD8\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5757\u9AD8\u5EA6" aria-hidden="true">#</a> <strong>\u83B7\u53D6\u5757\u9AD8\u5EA6</strong></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export async function getBlockNumber() {
 if (!window.ethereum) return;
 let currentBLock = await window.ethereum.request({
   method: &quot;eth_getBlockByNumber&quot;,
   params: [&quot;latest&quot;, false]
 });
 currentBLock = Number(currentBLock.number).toString();
 return currentBLock;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8D26\u53F7\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u8D26\u53F7\u76F8\u5173" aria-hidden="true">#</a> <strong>\u8D26\u53F7\u76F8\u5173</strong></h3><h4 id="\u6821\u9A8C-token-address-\u662F\u5426\u5408\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6821\u9A8C-token-address-\u662F\u5426\u5408\u6CD5" aria-hidden="true">#</a> <strong>\u6821\u9A8C token Address \u662F\u5426\u5408\u6CD5</strong></h4><p>\u6B64\u5904\u4E3A\u8BED\u96C0\u5185\u5BB9\u5361\u7247\uFF0C\u70B9\u51FB\u94FE\u63A5\u67E5\u770B\uFF1A<a href="https://www.yuque.com/go/doc/48378172" target="_blank" rel="noopener noreferrer">https://www.yuque.com/go/doc/48378172</a></p><h4 id="\u5927\u5C0F\u5199\u5730\u5740\u77EB\u6B63" tabindex="-1"><a class="header-anchor" href="#\u5927\u5C0F\u5199\u5730\u5740\u77EB\u6B63" aria-hidden="true">#</a> <strong>\u5927\u5C0F\u5199\u5730\u5740\u77EB\u6B63</strong></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export function transLegalAddress(address) {
 const account = ethers.utils.getAddress(address);
 return account;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8C03\u7528\u667A\u80FD\u5408\u7EA6\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u8C03\u7528\u667A\u80FD\u5408\u7EA6\u76F8\u5173" aria-hidden="true">#</a> <strong>\u8C03\u7528\u667A\u80FD\u5408\u7EA6\u76F8\u5173</strong></h3><h4 id="\u53EF\u8BFB\u53EF\u5199\u6743\u9650-\u6267\u884C\u5408\u7EA6" tabindex="-1"><a class="header-anchor" href="#\u53EF\u8BFB\u53EF\u5199\u6743\u9650-\u6267\u884C\u5408\u7EA6" aria-hidden="true">#</a> <strong>\u53EF\u8BFB\u53EF\u5199\u6743\u9650-\u6267\u884C\u5408\u7EA6</strong></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export async function outContract(tokenJson, contractAddress) {
 let ethersProvider = new ethers.providers.Web3Provider(
   window.ethereum,
   &quot;any&quot;
 );
 if (account.value) {
   const Contract = new ethers.Contract(
     contractAddress,
     tokenJson,
     ethersProvider.getSigner()
   );
   return Contract;
 } else {
   let contracts = getContractAddress();
   let ethersProvider = new ethers.providers.JsonRpcProvider(contracts.rpcURL);
   const Contract = new ethers.Contract(
     contractAddress,
     tokenJson,
     ethersProvider
   );
   return Contract;
 }
}


export async function getPoolRewards(account) {
 const contract = await outContract(tokenJson, contractAddress.PoolGuardian);
 let getPoolRewards = await contract.getPoolRewards(account);
 return {
   createRewards: Transfer.receiveAmount(getPoolRewards._createReward, 18),
   createPools: Transfer.transBigNumber(getPoolRewards._createPools),
   stakingRewards: Transfer.receiveAmount(getPoolRewards._stakingReward, 18),
   stakingPools: Transfer.transBigNumber(getPoolRewards._stakingPools)
 };
}


export async function deposit(poolId, tokenAddress, value) {
 const contract = await await outContract(tokenJson, contractAddress.PoolGuardian);
 let _decimals = await decimals(tokenAddress);
 let Amount = Transfer.toAmount(value, _decimals);
 const tx = await contract.deposit(poolId, Amount);
 let deposit = await tx.wait();
 return deposit;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5E76\u53D1\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u5E76\u53D1\u8C03\u7528" aria-hidden="true">#</a> <strong>\u5E76\u53D1\u8C03\u7528</strong></h4><p><strong>\u9700\u8981\u5728\u76EE\u6807\u94FE\u4E0A\u90E8\u7F72\u597D\u5E76\u53D1\u8C03\u7528\u7684\u5DE5\u5177\u5408\u7EA6</strong></p><p><strong>bsc \u6D4B\u8BD5\u94FE:</strong></p><p><strong>multicall: &quot;0xc8aeA8381c6679Ac49E7e7ff638aEe10c6Ff3122&quot;,</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { Provider, setMulticallAddress } from &quot;ethers-multicall&quot;;



export function getContractAddress() {
  let chainId = chain.id ? chain.id : wallet.defaultChainId;
  const contractAddress = contractMap[chainId];
  if (contractAddress?.support) {
    return contractAddress;
  } else {
    return null;
  }
}

export async function getProvider() {
  let contractAddress = getContractAddress();
  if (!contractAddress.rpcURL) {
    console.log(&quot;contractAddress.rpcURL is null&quot;);
    return;
  }
  if (!contractAddress.multicall) {
    console.log(&quot;contractAddress.multicall address is null&quot;);
    return;
  }
  if (!contractAddress.chainId) {
    console.log(&quot;contractAddress.chainId is null&quot;);
    return;
  }
  const provider = new ethers.providers.JsonRpcProvider(contractAddress.rpcURL);
  const ethcallProvider = new Provider(provider);
  setMulticallAddress(contractAddress.chainId, contractAddress.multicall);
  await ethcallProvider.init();
  return ethcallProvider;
}






export async function fetchOnlinePools() {
  let contractAddress = getContractAddress();
  let ids = await getOnlinePoolIds();
  let ethcallProvider = await getProvider();
  const targetContract = new Contract(contractAddress.PoolGuardian, tokenJson);
  const poolInfoCalls = ids.map(poolId =&gt; targetContract.getPoolInfo(poolId));
  const poolInfoList = await ethcallProvider.all(poolInfoCalls);
  let resultList = poolInfoList.map(poolInfo =&gt; {
    return {
      id: Transfer.transBigNumber(poolInfo._id),
      tokenAddress: poolInfo._stakedTokenAddr,
      creator: poolInfo._creator,
      tokenName: poolInfo._name,
      decimals: poolInfo._decimal,
      durationDays: Transfer.transBigNumber(poolInfo._durationDays),
      endBlock: Transfer.transBigNumber(poolInfo._endBlock),
      startBlock: Transfer.transBigNumber(poolInfo._endBlock),
      maxLeverage: Transfer.transBigNumber(poolInfo._leverage),
      stateFlag: Transfer.transBigNumber(poolInfo._stateFlag)
    };
  });
  return resultList;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6839\u636E\u5757\u8282\u70B9\u83B7\u53D6\u5386\u53F2\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u5757\u8282\u70B9\u83B7\u53D6\u5386\u53F2\u65E5\u5FD7" aria-hidden="true">#</a> <strong>\u6839\u636E\u5757\u8282\u70B9\u83B7\u53D6\u5386\u53F2\u65E5\u5FD7</strong></h4><p>\u6B64\u5904\u4E3A\u8BED\u96C0\u5185\u5BB9\u5361\u7247\uFF0C\u70B9\u51FB\u94FE\u63A5\u67E5\u770B\uFF1A<a href="https://www.yuque.com/webkubor/blockchain/xnunwx" target="_blank" rel="noopener noreferrer">https://www.yuque.com/webkubor/blockchain/xnunwx</a></p><h2 id="\u94B1\u5305\u5DE5\u5177\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u94B1\u5305\u5DE5\u5177\u76F8\u5173" aria-hidden="true">#</a> <strong>\u94B1\u5305\u5DE5\u5177\u76F8\u5173</strong></h2><h3 id="metamask" tabindex="-1"><a class="header-anchor" href="#metamask" aria-hidden="true">#</a> <strong>metamask</strong></h3><h4 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> <strong>\u7B80\u4ECB</strong></h4><p><a href="https://metamask.io/" target="_blank" rel="noopener noreferrer"><strong>Metamask</strong></a> \u662F Chrome \u548C Firefox \u7684\u6D4F\u89C8\u5668\u6269\u5C55\uFF0C \u5B83\u80FD\u8BA9\u7528\u6237\u5B89\u5168\u5730\u7EF4\u62A4\u4ED6\u4EEC\u7684\u4EE5\u592A\u574A\u8D26\u6237\u548C\u79C1\u94A5 \uFF0C \u5E76\u7528\u4ED6\u4EEC\u7684\u8D26\u6237\u548C\u4F7F\u7528 Web3.js \u7684\u7F51\u7AD9\u4E92\u52A8\uFF08\u5982\u679C\u4F60\u8FD8\u6CA1\u7528\u8FC7\u5B83\uFF0C\u4F60\u80AF\u5B9A\u4F1A\u60F3\u53BB\u5B89\u88C5\u7684\u2014\u2014\u8FD9\u6837\u4F60\u7684\u6D4F\u89C8\u5668\u5C31\u80FD\u4F7F\u7528 Web3.js \u4E86\uFF0C\u7136\u540E\u4F60\u5C31\u53EF\u4EE5\u548C\u4EFB\u4F55\u4E0E\u4EE5\u592A\u574A\u533A\u5757\u94FE\u901A\u4FE1\u7684\u7F51\u7AD9\u4EA4\u4E92\u4E86\uFF09**</p><p>\u4F5C\u4E3A\u5F00\u53D1\u8005\uFF0C\u5982\u679C\u4F60\u60F3\u8BA9\u7528\u6237\u4ECE\u4ED6\u4EEC\u7684\u6D4F\u89C8\u5668\u91CC\u901A\u8FC7\u7F51\u7AD9\u548C\u4F60\u7684 DApp \u4EA4\u4E92\uFF08\u5C31\u50CF\u6211\u4EEC\u5728 CryptoZombies \u6E38\u620F\u91CC\u4E00\u6837\uFF09\uFF0C\u4F60\u80AF\u5B9A\u4F1A\u60F3\u8981\u517C\u5BB9 Metamask \u7684\u3002</p><p>\u6CE8\u610F: Metamask \u9ED8\u8BA4\u4F7F\u7528 Infura \u7684\u670D\u52A1\u5668\u505A\u4E3A web3 \u63D0\u4F9B\u8005\u3002 \u5C31\u50CF\u6211\u4EEC\u4E0A\u9762\u505A\u7684\u90A3\u6837\u3002\u4E0D\u8FC7\u5B83\u8FD8\u4E3A\u7528\u6237\u63D0\u4F9B\u4E86\u9009\u62E9\u4ED6\u4EEC\u81EA\u5DF1 Web3 \u63D0\u4F9B\u8005\u7684\u9009\u9879\u3002\u6240\u4EE5\u4F7F\u7528 Metamask \u7684 web3 \u63D0\u4F9B\u8005\uFF0C\u4F60\u5C31\u7ED9\u4E86\u7528\u6237\u9009\u62E9\u6743\uFF0C\u800C\u81EA\u5DF1\u65E0\u9700\u64CD\u5FC3\u8FD9\u4E00\u5757\u3002</p><p><strong>\u8FDE\u63A5\u94B1\u5305\u7684\u5730\u5740\uFF1A</strong></p><p><a href="https://app.uniswap.org/#/swap" target="_blank" rel="noopener noreferrer"><strong>https://app.uniswap.org/#/swap</strong></a></p><h4 id="\u662F\u5426\u5B89\u88C5-metamsk" tabindex="-1"><a class="header-anchor" href="#\u662F\u5426\u5B89\u88C5-metamsk" aria-hidden="true">#</a> <strong>\u662F\u5426\u5B89\u88C5 metamsk</strong></h4><p><img src="`+r+`" alt=""></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export function isMetaMask() {
 const { ethereum } = window;
 return Boolean(ethereum &amp;&amp; ethereum.isMetaMask);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u83B7\u53D6-chainid" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6-chainid" aria-hidden="true">#</a> <strong>\u83B7\u53D6 chainid</strong></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>async function getChainId() {
 const { ethereum } = window;
 try {
   const chainId = await ethereum.request({
     method: &quot;eth_chainId&quot;
   });
   handleNewChain(chainId);
 } catch (err) {
   console.error(err);
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4E3B\u52A8\u5207\u6362\u5230\u4EE5\u592A\u574A\u7F51\u7EDC" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u52A8\u5207\u6362\u5230\u4EE5\u592A\u574A\u7F51\u7EDC" aria-hidden="true">#</a> <strong>\u4E3B\u52A8\u5207\u6362\u5230\u4EE5\u592A\u574A\u7F51\u7EDC</strong></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>async function switchToEthereum() {
 try {
   await window.ethereum.request({
     method: &quot;wallet_switchEthereumChain&quot;,
     params: [
       {
         chainId: &quot;0x1&quot;
       }
     ]
   });
 } catch (error) {
   console.log(error);
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4E3B\u52A8\u5207\u6362\u5230\u5176\u4F59\u94FE\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u52A8\u5207\u6362\u5230\u5176\u4F59\u94FE\u914D\u7F6E" aria-hidden="true">#</a> <strong>\u4E3B\u52A8\u5207\u6362\u5230\u5176\u4F59\u94FE\u914D\u7F6E</strong></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>async function switchToOtherNetwork(findChain) {
 const data = [];
 data.push(findChain);
 console.log(findChain, &quot;switchNetwork&quot;);
 try {
   await window.ethereum.request({
     method: &quot;wallet_addEthereumChain&quot;,
     params: data
   });
 } catch (error) {
   console.log(error);
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u76D1\u542C\u94FE\u4E0A\u94B1\u5305\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u76D1\u542C\u94FE\u4E0A\u94B1\u5305\u914D\u7F6E" aria-hidden="true">#</a> <strong>\u76D1\u542C\u94FE\u4E0A\u94B1\u5305\u914D\u7F6E</strong></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function handelConnectInfo(info) {
 console.log(info, &quot;handelConnectInfo&quot;);
}

function handleDisConnect(disconnect) {
 console.log(disconnect, &quot;handleDisConnect&quot;);
}

function handleNewAccount(account) {
 updateAccount(account[0]);
}

function handelNewMessage(msg) {
 console.log(msg, &quot;handelNewMessage&quot;);
}

function _listeningMetamsk() {
 const { ethereum } = window;

 ethereum.on(&quot;chainChanged&quot;, handleNewChain);

 ethereum.on(&quot;accountsChanged&quot;, handleNewAccount);

 ethereum.on(&quot;message&quot;, handelNewMessage);

 ethereum.on(&quot;connect&quot;, throttle(handelConnectInfo, 1000));

 ethereum.on(&quot;disconnect&quot;, throttle(handleDisConnect, 1000));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6DFB\u52A0\u81EA\u5B9A\u4E49\u4EE3\u5E01\u5230-metamask" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u81EA\u5B9A\u4E49\u4EE3\u5E01\u5230-metamask" aria-hidden="true">#</a> <strong>\u6DFB\u52A0\u81EA\u5B9A\u4E49\u4EE3\u5E01\u5230 metamask</strong></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>async function addToken() {
     let contractAddress = getContractAddress();
     window.ethereum
       .request({
         method: &quot;wallet_watchAsset&quot;,
         params: {
           type: &quot;ERC20&quot;,
           options: {
             address: contractAddress.IPISTR,
             symbol: &quot;IPISTR&quot;,
             decimals: 18,
             image: &quot;https://i.loli.net/2021/08/12/BNYGAD9RZUl6nch.png&quot;
           }
         }
       })
       .then(success =&gt; {
         if (success) {
           Message.success(&quot;IPISTR Token added successfully!&quot;);
         } else {
           Message.error(&quot;Something went wrong.&quot;);
         }
       })
       .catch(console.error);
   }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7EFC\u5408\u5B9E\u4F8B-\u8FDE\u63A5\u94B1\u5305" tabindex="-1"><a class="header-anchor" href="#\u7EFC\u5408\u5B9E\u4F8B-\u8FDE\u63A5\u94B1\u5305" aria-hidden="true">#</a> <strong>\u7EFC\u5408\u5B9E\u4F8B-\u8FDE\u63A5\u94B1\u5305</strong></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export async function getMetamskConnect() {
  if (!isMetaMask()) {
    openUrl(&quot;https://metamask.io/&quot;, &quot;install metamsk&quot;);
  }
  if (window.ethereum) {
    window.provider = window.ethereum;
    try {
      let accounts = await window.ethereum.request({
        method: &quot;eth_requestAccounts&quot;
      });
      await updateAccount(accounts[0]);
    } catch (error) {
      console.warn(&quot;Please authorize to access tour account&quot;);
    }
  }
  await getChainId();
  _listeningMetamsk();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7EFC\u5408\u5B9E\u4F8B-\u5207\u6362\u7F51\u7EDC" tabindex="-1"><a class="header-anchor" href="#\u7EFC\u5408\u5B9E\u4F8B-\u5207\u6362\u7F51\u7EDC" aria-hidden="true">#</a> <strong>\u7EFC\u5408\u5B9E\u4F8B-\u5207\u6362\u7F51\u7EDC</strong></h4><p><strong>\u53C2\u8003\u6587\u732E</strong></p><p><a href="https://ethereum-magicians.org/t/eip-3326-wallet-switchethereumchain/5471/3" target="_blank" rel="noopener noreferrer">https://ethereum-magicians.org/t/eip-3326-wallet-switchethereumchain/5471/3</a></p><p><strong>\u89E3\u51B3\u65B9\u6848</strong></p><p><a href="https://web03.cn/blog/257" target="_blank" rel="noopener noreferrer">https://web03.cn/blog/257</a></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export async function switchNetwork(id) {
 let findChain = nativeMetamaskMap.find(v =&gt; v.chainId === id);
 if (!window.ethereum) {
   Message.warning(&quot;Please install metamsk&quot;);
   return;
 }
 if (!findChain) {
   Message.warning(&quot;The current website does not support the chain&quot;);
   return;
 }
 if (id === &quot;0x1&quot;) {
   switchToEthereum();
 } else {
   switchToOtherNetwork(findChain);
 }
}

export const nativeMetamaskMap = [
 {
   chainId: &quot;0x1&quot;,
   chainName: &quot;Ethereum Mainnet&quot;,
   nativeCurrency: {
     name: &quot;Ether&quot;,
     symbol: &quot;ETH&quot;,
     decimals: 18
   },
   rpcUrls: [&quot;https://mainnet.infura.io/v3/&quot;],
   blockExplorerUrls: [&quot;https://etherscan.io/&quot;]
 },
 {
   chainId: &quot;0x80&quot;,
   chainName: &quot;huobi Network&quot;,
   nativeCurrency: {
     name: &quot;HT&quot;,
     symbol: &quot;HT&quot;,
     decimals: 18
   },
   rpcUrls: [&quot;https://http-mainnet-node.huobichain.com&quot;],
   blockExplorerUrls: [&quot;https://hecoinfo.com&quot;]
 },
 {
   chainId: &quot;0x38&quot;,
   chainName: &quot;Binance Smart Chain&quot;,
   nativeCurrency: {
     name: &quot;BNB&quot;,
     symbol: &quot;BNB&quot;,
     decimals: 18
   },
   rpcUrls: [&quot;https://bsc-dataseed.binance.org/&quot;],
   blockExplorerUrls: [&quot;https://bscscan.com/&quot;]
 },
 {
   chainId: &quot;0x61&quot;,
   chainName: &quot;BSC-Test-Network&quot;,
   nativeCurrency: {
     name: &quot;BNB&quot;,
     symbol: &quot;BNB&quot;,
     decimals: 18
   },
   rpcUrls: [&quot;https://data-seed-prebsc-2-s3.binance.org:8545&quot;],
   blockExplorerUrls: [&quot;https://testnet.bscscan.com&quot;]
 },
 {
   chainId: &quot;0x539&quot;,
   chainName: &quot;Local-Test-Network&quot;,
   nativeCurrency: {
     name: &quot;Ether&quot;,
     symbol: &quot;ETH&quot;,
     decimals: 18
   },
   rpcUrls: [&quot;https://mainnet.infura.io/v3/&quot;],
   blockExplorerUrls: [&quot;https://etherscan.io/&quot;]
 }
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="walletconnect" tabindex="-1"><a class="header-anchor" href="#walletconnect" aria-hidden="true">#</a> walletconnect</h3><p>WalletConnect \u7531\u540C\u540D\u975E\u76C8\u5229\u7EC4\u7EC7 WalletConnect \u57FA\u91D1\u4F1A\u652F\u6301\u5F00\u53D1\u7684\u4E00\u5957\u5F00\u6E90\u534F\u8BAE\u3002WalletConnect \u7684\u5F00\u53D1\u56E2\u961F\u5B9E\u529B\u96C4\u539A\uFF0C\u56E2\u961F\u8D1F\u8D23\u4EBA Pedro Gomes \u66FE\u7ECF\u662F<a href="http://balance.io/" target="_blank" rel="noopener noreferrer">http://Balance.io</a>\uFF08ETH DeFi \u5165\u53E3\u7EA7\u4EA7\u54C1\uFF09\u7684\u7F51\u9875\u7AEF\u5168\u6808\u5DE5\u7A0B\u5E08 \uFF0C\u5728 2018 \u5E74\u7684\u65F6\u5019\uFF0C\u4ED6\u79BB\u5F00<a href="http://balance.io/" target="_blank" rel="noopener noreferrer">http://Balance.io</a>\uFF0C\u5168\u804C\u6295\u5165 WalletConnect \u7684\u5F00\u53D1\uFF0C\u624D\u6709\u4E86\u5982\u4ECA\u7684 WalletConnect \u5F00\u6E90\u534F\u8BAE\u3002WalletConnect \u5F00\u6E90\u534F\u8BAE\u4E3B\u8981\u7528\u4E8E\u7AEF\u5230\u7AEF\u7684\u52A0\u5BC6\uFF0C\u63D0\u9AD8\u6570\u5B57\u94B1\u5305\u7684\u6613\u7528\u6027\uFF0C\u7ED9\u7528\u6237\u66F4\u52A0\u8F7B\u677E\u3001\u5B89\u5168\u7684\u4F53\u9A8C\u611F\u3002</p><h4 id="\u57FA\u672C\u4F9D\u8D56-1" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F9D\u8D56-1" aria-hidden="true">#</a> <strong>\u57FA\u672C\u4F9D\u8D56</strong></h4><div class="language-import ext-import line-numbers-mode"><pre class="language-import"><code>import QRCodeModal from &quot;@walletconnect/qrcode-modal&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u6FC0\u6D3B\u4E3B\u52A8\u8FDE\u63A5-\u5F39\u51FA\u4E8C\u7EF4\u7801" tabindex="-1"><a class="header-anchor" href="#\u6FC0\u6D3B\u4E3B\u52A8\u8FDE\u63A5-\u5F39\u51FA\u4E8C\u7EF4\u7801" aria-hidden="true">#</a> <strong>\u6FC0\u6D3B\u4E3B\u52A8\u8FDE\u63A5-\u5F39\u51FA\u4E8C\u7EF4\u7801</strong></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const getWallectConnect = async () =&gt; {

    const bridge = &quot;https://bridge.walletconnect.org&quot;;


    const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });

    walletconnect.connector = connector;

    if (!connector.connected) {

      await connector.createSession();

      if (localStorage.metamskconnect) delete localStorage.metamskconnect;
    }


    await subscribeToEvents();
  };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u65AD\u5F00\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u65AD\u5F00\u94FE\u63A5" aria-hidden="true">#</a> <strong>\u65AD\u5F00\u94FE\u63A5</strong></h4><p><code>const onDisconnect = () =&gt; { walletconnect.walletconnect = null; };</code></p><h4 id="\u4E8B\u4EF6\u76D1\u542C" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u76D1\u542C" aria-hidden="true">#</a> <strong>\u4E8B\u4EF6\u76D1\u542C</strong></h4><div class="language-const ext-const line-numbers-mode"><pre class="language-const"><code>    const { connector } = walletconnect;

    if (!connector) {
      return;
    }

    connector.on(&quot;session_update&quot;, async (error, payload) =&gt; {
      console.log(\`connector.on(&quot;session_update&quot;)\`, payload);

      if (error) {
        throw error;
      }

      const { chainId, accounts } = payload.params[0];
      onSessionUpdate(accounts, chainId);
    });

    connector.on(&quot;connect&quot;, (error, payload) =&gt; {
      console.log(\`connector.on(&quot;connect&quot;)\`);

      if (error) {
        throw error;
      }

      onConnect(payload);
    });

    connector.on(&quot;disconnect&quot;, (error, payload) =&gt; {
      console.log(&quot;%c%s&quot;, &quot;color: #ffa640&quot;, payload);
      Message.warning(&quot;wallectconnect disconnect&quot;);

      if (error) {
        throw error;
      }

      onDisconnect();
    });

    if (connector.connected) {
      const { chainId, accounts } = connector;
      onSessionUpdate(accounts, chainId);
    }
    walletconnect.connector = connector;
  };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5185\u5BB9\u53C2\u8003\uFF1A <a href="https://learnblockchain.cn/article/3675" target="_blank" rel="noopener noreferrer">21 \u4E2A\u57FA\u4E8E ethers \u7684 Dapp \u5E38\u7528\u5DE5\u5177\u51FD\u6570 | \u767B\u94FE\u793E\u533A | \u533A\u5757\u94FE\u6280\u672F\u793E\u533A</a></p>`,72),l=[a];function t(c,o){return n(),i("div",null,l)}var u=e(d,[["render",t],["__file","index.html.vue"]]);export{u as default};
