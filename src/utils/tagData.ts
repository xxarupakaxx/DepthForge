export interface TagMetadata {
  name: string;
  description: string;
  contexts: string[];
  causePatterns: string[];
  avoidanceRules: string[];
  icon?: string;
}

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
  } catch (error) {
    // JSON ファイルが存在しない場合はデフォルト値を返す
    return null;
  }
}

export function getDefaultTagMetadata(tagName: string): TagMetadata {
  return {
    name: tagName,
    description: 'このパターンの詳細な説明はまだ追加されていません。',
    contexts: [],
    causePatterns: [],
    avoidanceRules: [],
  };
}
