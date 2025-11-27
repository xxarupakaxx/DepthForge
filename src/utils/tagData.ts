export type ImpactExample = {
  title: string;
  slug: string;
};

export type TagMetadata = {
  name: string;
  shortDescription: string;
  contexts: string[];
  thinkingPatterns: string[];
  avoidanceRules: string[];
  impactExamples?: ImpactExample[];
  icon?: string;
};

const tagDataCache = new Map<string, TagMetadata>();

export async function getTagMetadata(tagName: string): Promise<TagMetadata | null> {
  if (tagDataCache.has(tagName)) {
    return tagDataCache.get(tagName)!;
  }

  try {
    const data = await import(`../data/tags/${tagName}.json`);
    const metadata: TagMetadata = data.default || data;
    tagDataCache.set(tagName, metadata);
    return metadata;
  } catch {
    // JSON ファイルが存在しない場合はデフォルト値を返す
    return null;
  }
}

export function getDefaultTagMetadata(tagName: string): TagMetadata {
  return {
    name: tagName,
    shortDescription: 'このパターンの詳細な説明はまだ追加されていません。',
    contexts: [],
    thinkingPatterns: [],
    avoidanceRules: [],
  };
}
