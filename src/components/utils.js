const getBlogPostId = (guid) => {
    // Extract the last part of the URL (assuming guid is a URL)
    const parts = guid.split('/');
    const lastPart = parts[parts.length - 1];
  
    // Map known titles to their corresponding IDs
    const titleToId = {
      'demystifying-vector-stores-numpy': 'demystifying-vector-stores-numpy',
      'demystifying-vector-stores-postgres': 'demystifying-vector-stores-postgres',
      'gpt3-finetune': 'gpt3-finetune',
      'beanie': 'beanie',
      'searchable-pdf': 'searchable-pdf'
    };
  
    // Check if the lastPart matches any of our known titles
    for (const [title, id] of Object.entries(titleToId)) {
      if (lastPart.toLowerCase().includes(title)) {
        return id;
      }
    }
  
    // If no match is found, return a fallback ID or null
    console.warn(`No matching ID found for guid: ${guid}`);
    return null;
  };


export {getBlogPostId}