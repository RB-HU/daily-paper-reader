const assert = require('node:assert/strict');

global.window = global.window || {};
global.document = global.document || {
  readyState: 'loading',
  addEventListener() {},
};

require('../app/subscriptions.smart-query.js');

const {
  buildPromptFromTemplate,
  containsCjk,
  defaultPromptTemplate,
  isEnglishRetrievalText,
  normalizeGenerated,
} = global.window.SubscriptionsSmartQuery.__test;

function testPromptRequiresEnglishRetrievalFieldsAndChineseCnFields() {
  const prompt = buildPromptFromTemplate('RL', '强化学习算法对比', defaultPromptTemplate);

  assert.match(prompt, /keyword and query MUST be English retrieval text only/);
  assert.match(prompt, /keyword_cn and query_cn MUST be Chinese/);
  assert.match(prompt, /The query field MUST be English only/);
}

function testGeneratedCandidatesKeepChineseOutOfRetrievalFields() {
  const normalized = normalizeGenerated({
    tag: 'RL',
    description: '强化学习算法对比',
    keywords: [
      {
        keyword: '强化学习',
        query: '强化学习算法对比',
        keyword_cn: '强化学习',
      },
      {
        keyword: 'reinforcement learning',
        query: '强化学习算法对比',
        keyword_cn: '强化学习',
      },
      {
        keyword: 'policy gradient',
        query: 'policy gradient methods',
        keyword_cn: '策略梯度',
      },
    ],
    intent_queries: [
      {
        query: '强化学习入门教程',
        query_cn: '强化学习入门教程',
      },
      {
        query: 'reinforcement learning algorithms comparison',
        query_cn: '强化学习算法对比',
      },
    ],
  });

  assert.deepEqual(
    normalized.keywords.map((item) => item.keyword),
    ['reinforcement learning', 'policy gradient'],
  );
  assert.deepEqual(
    normalized.keywords.map((item) => item.query),
    ['reinforcement learning', 'policy gradient methods'],
  );
  assert.deepEqual(
    normalized.intent_queries.map((item) => item.query),
    ['reinforcement learning algorithms comparison'],
  );
  normalized.keywords.forEach((item) => {
    assert.equal(containsCjk(item.keyword), false);
    assert.equal(containsCjk(item.query), false);
    assert.equal(isEnglishRetrievalText(item.query), true);
  });
  normalized.intent_queries.forEach((item) => {
    assert.equal(containsCjk(item.query), false);
    assert.equal(isEnglishRetrievalText(item.query), true);
  });
}

testPromptRequiresEnglishRetrievalFieldsAndChineseCnFields();
testGeneratedCandidatesKeepChineseOutOfRetrievalFields();

console.log('subscriptions smart query tests passed');
