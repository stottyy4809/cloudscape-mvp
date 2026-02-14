document.addEventListener("DOMContentLoaded", () => {
    const modelSelect = document.getElementById("model-select");
    const gpuSelect = document.getElementById("gpu-select");
    const throughputVal = document.getElementById("throughput-val");
    const costVal = document.getElementById("cost-val");

    // Dummy data combining model + gpu selections
    const mockData = {
        "llama3-a100-a100": { throughput: "4,200", cost: "$1.85" },
        "llama3-a100-h100": { throughput: "9,100", cost: "$4.50" },
        "llama3-a100-rtx4090": { throughput: "1,800", cost: "$0.40" },
        "mixtral-a100-a100": { throughput: "5,500", cost: "$1.85" },
        "mixtral-a100-h100": { throughput: "11,200", cost: "$4.50" },
        "mixtral-a100-rtx4090": { throughput: "2,400", cost: "$0.40" },
        "mistral-a100-a100": { throughput: "14,000", cost: "$1.85" },
        "mistral-a100-h100": { throughput: "28,000", cost: "$4.50" },
        "mistral-a100-rtx4090": { throughput: "8,500", cost: "$0.40" },
    };

    function updateCalculator() {
        const key = `${modelSelect.value}-${gpuSelect.value}`;

        if (mockData[key]) {
            throughputVal.innerHTML = `${mockData[key].throughput} <span class="unit">tokens/min</span>`;
            costVal.innerHTML = `${mockData[key].cost} <span class="unit">/hr</span>`;
            
            throughputVal.style.opacity = 0;
            costVal.style.opacity = 0;
            setTimeout(() => {
                throughputVal.style.opacity = 1;
                costVal.style.opacity = 1;
            }, 100);
        }
    }

    modelSelect.addEventListener("change", updateCalculator);
    gpuSelect.addEventListener("change", updateCalculator);
});