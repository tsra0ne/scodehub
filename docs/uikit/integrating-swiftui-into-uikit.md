---
title: Integrating SwiftUI into UIKit
head:
  - - meta
    - name: description
      content: helpful to integrate swiftui into uikit
  - - meta
    - name: keywords
      content: ukit swiftui combine
layout: doc
---

# Integrating SwiftUI into UIKit

In this section, we will demonstrate how to integrate SwiftUI views into UIKit using UIHostingController and adding SwiftUI views directly to UIKit components.

## Using UIHostingController

UIHostingController is a UIViewController subclass that can host a SwiftUI view. To use UIHostingController, follow these steps:

- Create a new SwiftUI view file.
- In your UIKit view controller, import SwiftUI.
- Instantiate a UIHostingController with the SwiftUI view as its root view.
- Add the hosting controller as a child view controller and addSubview its view.

Here’s an example of adding a SwiftUI view to a UIKit view controller:

```swift
import UIKit
import SwiftUI

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        let swiftUIView = SampleSwiftUIView()
        let hostingController = UIHostingController(rootView: swiftUIView)
        addChild(hostingController)
        hostingController.view.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(hostingController.view)

        NSLayoutConstraint.activate([
            hostingController.view.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            hostingController.view.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            hostingController.view.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            hostingController.view.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])

        hostingController.didMove(toParent: self)
    }
}
```

In this example, SampleSwiftUIView is a SwiftUI view that you want to add to your UIKit view controller.

## Adding SwiftUI Views to UIKit

You can also add SwiftUI views directly to UIKit components using UIView’s addSubview() method. To do this, follow these steps:

- In your UIKit view or view controller, import SwiftUI.
- Create an instance of UIHostingController with the SwiftUI view as its root view.
- Add the hosting controller’s view as a subview of your UIKit view.

Here’s an example of adding a SwiftUI view to a UIKit UIView:

```swift
import UIKit
import SwiftUI

class CustomView: UIView {

    override init(frame: CGRect) {
        super.init(frame: frame)

        let swiftUIView = SampleSwiftUIView()
        let hostingController = UIHostingController(rootView: swiftUIView)
        hostingController.view.translatesAutoresizingMaskIntoConstraints = false
        addSubview(hostingController.view)

        NSLayoutConstraint.activate([
            hostingController.view.topAnchor.constraint(equalTo: topAnchor),
            hostingController.view.leadingAnchor.constraint(equalTo: leadingAnchor),
            hostingController.view.trailingAnchor.constraint(equalTo: trailingAnchor),
            hostingController.view.bottomAnchor.constraint(equalTo: bottomAnchor)
        ])
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
```