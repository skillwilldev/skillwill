

/**
 * 2. Функция validateManifest
 * Проверяет объект на наличие (Missing) и корректность (Invalid) свойств.
 */
function validateManifest(manifest) {
    const errors = {};
    const fields = ["containerId", "destination", "weight", "unit", "hazmat"];

    fields.forEach((field) => {
        // Проверка на отсутствие свойства (пункт 8)
        if (!(field in manifest)) {
            errors[field] = "Missing";
            return;
        }

        const value = manifest[field];

        // Проверка на валидность (Invalid)
        if (field === "containerId") {
            // Положительное целое число (пункты 10, 11)
            if (typeof value !== "number" || !Number.isInteger(value) || value <= 0) {
                errors[field] = "Invalid";
            }
        }
        else if (field === "destination") {
            // Непустая строка после trim() (пункт 12)
            if (typeof value !== "string" || value.trim().length === 0) {
                errors[field] = "Invalid";
            }
        }
        else if (field === "weight") {
            // Положительное число, не NaN (пункты 9, 13)
            if (typeof value !== "number" || Number.isNaN(value) || value <= 0) {
                errors[field] = "Invalid";
            }
        }
        else if (field === "unit") {
            // Только "kg" или "lb" (пункт 9)
            if (value !== "kg" && value !== "lb") {
                errors[field] = "Invalid";
            }
        }
        else if (field === "hazmat") {
            // Только логическое значение (пункт 9)
            if (typeof value !== "boolean") {
                errors[field] = "Invalid";
            }
        }
    });

    return errors;
}

function normalizeUnits(manifest) {
    const normalized = { ...manifest };

    if (normalized.unit === "lb") {
        // Используем коэффициент 0.45 согласно пункту 3
        normalized.weight = normalized.weight * 0.45;
        normalized.unit = "kg";
    }
    return normalized;
}

/**
 * 3. Функция processManifest
 * Логирует результат валидации и обработки данных.
 */
function processManifest(manifest) {
    const validationErrors = validateManifest(manifest);
    const isValid = Object.keys(validationErrors).length === 0;

    if (isValid) {
        // Случай успешной валидации (пункты 17-20)
        console.log(`Validation success: ${manifest.containerId}`);

        const normalized = normalizeUnits(manifest);
        console.log(`Total weight: ${normalized.weight} kg`);
    } else {
        // Случай ошибки валидации (пункты 21-25)
        console.log(`Validation error: ${manifest.containerId}`);
        console.log(validationErrors);
    }
}


const validManifest = {
    containerId: 500,
    destination: "  Tokyo, Japan  ", // Есть пробелы, но trim() их уберет
    weight: 300,
    unit: "lb",
    hazmat: true
};

const invalidManifest = {
    containerId: 50,        // Invalid (отрицательный)
    destination: " ",       // Invalid (пустая строка после trim)
    weight: NaN,            // Invalid (не число)
    // unit: "kg",          // Missing (поле удалено)
    hazmat: "yes"           // Invalid (строка вместо boolean)
};

processManifest(validManifest);