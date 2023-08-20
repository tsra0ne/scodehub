# VitePress 💙 StackBlitz

Hi there :wave: This is a demo running VitePress within your **browser tab**!

## Powered by Vite

VitePress uses Vite under the hood. This means:

- Instant server start
- Lightning fast HMR
- Optimized builds

## Markdown-Centered

So you can focus more on writing. Powered by MarkdownIt. Comes with many [built-in extensions](https://vitepress.vuejs.org/guide/markdown), and you can use Vue features in Markdown too!

```swift
import SwiftUI

struct AlbumDetail: View {
	var album: Album

	var body: some View {
		List(album.songs) { song in 
			HStack {
				Image(album.cover)
				VStack(alignment: .leading) {
                    Text(song.title)
					Text(song.artist.name)
						.foregroundStyle(.secondary)
				}
			}
		}
	}
}
```